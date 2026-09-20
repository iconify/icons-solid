import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.q31wurbvl {
  fill: currentColor;
  d: path("M10.25 17a3.75 3.75 0 0 1 3.675 3H25.25a.75.75 0 0 1 0 1.5H13.925a3.751 3.751 0 0 1-7.35 0H2.75a.75.75 0 0 1 0-1.5h3.825a3.75 3.75 0 0 1 3.675-3m7.5-13.5a3.75 3.75 0 0 1 3.675 3h3.825a.75.75 0 0 1 0 1.5h-3.825a3.751 3.751 0 0 1-7.35 0H2.75a.75.75 0 0 1 0-1.5h11.325a3.75 3.75 0 0 1 3.675-3");
}
</style><path class="q31wurbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:options-28-filled"} {...others} />);
}

export default Component;
