import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tth03cclu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 20V15C2 9.477 6.477 5 12 5C17.523 5 22 9.477 22 15V20M6 20V15C6 11.686 8.686 9 12 9C15.314 9 18 11.686 18 15V20M10 20V15C10 13.895 10.895 13 12 13C13.105 13 14 13.895 14 15V20");
}
</style><path class="tth03cclu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rainbow-sharp"} {...others} />);
}

export default Component;
