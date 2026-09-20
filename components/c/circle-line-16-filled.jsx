import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.mw3edqbts {
  fill: currentColor;
  d: path("M14.98 8.5a6.999 6.999 0 0 1-13.96 0zM8 1a7 7 0 0 1 6.98 6.5H1.02A7 7 0 0 1 8 1");
}
</style><path class="mw3edqbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-line-16-filled"} {...others} />);
}

export default Component;
