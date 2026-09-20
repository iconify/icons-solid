import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.kkr82pbcj {
  fill: currentColor;
  d: path("M14.884 12.651a.75.75 0 0 1-.634.35h-4.5a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 1.428-.322l4.5 9.5a.75.75 0 0 1-.044.722M10.5 6.085V11.5h2.565zM1.5 13a.5.5 0 0 1-.447-.724l5-10A.5.5 0 0 1 7 2.5v10a.5.5 0 0 1-.5.5z");
}
</style><path class="kkr82pbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flip-horizontal-16-filled"} {...others} />);
}

export default Component;
