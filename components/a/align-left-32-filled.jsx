import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.lvbrlvbly {
  fill: currentColor;
  d: path("M3 4a1 1 0 0 1 2 0v24a1 1 0 1 1-2 0zm7.5 1A3.5 3.5 0 0 0 7 8.5v3a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 25.5 5zm0 12A3.5 3.5 0 0 0 7 20.5v3a3.5 3.5 0 0 0 3.5 3.5h9a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5z");
}
</style><path class="lvbrlvbly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:align-left-32-filled"} {...others} />);
}

export default Component;
