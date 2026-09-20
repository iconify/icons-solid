import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z-2f0wbom {
  fill: currentColor;
  d: path("M2 6.5A4.5 4.5 0 0 1 6.5 2h11a4.5 4.5 0 1 1 0 9h-11A4.5 4.5 0 0 1 2 6.5m4.5 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 4.5a4.5 4.5 0 1 0 0 9h11a4.5 4.5 0 1 0 0-9zm13 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><path class="z-2f0wbom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toggle-multiple-24-filled"} {...others} />);
}

export default Component;
