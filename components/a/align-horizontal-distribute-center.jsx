import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eq9qmj-qh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 17H16C14.8964 17 14 16.106 14 15V9C14 7.897 14.8967 7 16 7H17M17 17H18C19.1055 17 20 16.105 20 15V9C20 7.896 19.1058 7 18 7H17M17 17V22M17 7V2M7 5H8C9.1035 5 10 5.897 10 7V17C10 18.107 9.1079 19 8 19H7M7 5H6C4.8943 5 4 5.899 4 7V17C4 18.108 4.8988 19 6 19H7M7 5V2M7 19V22");
}
</style><path class="eq9qmj-qh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-horizontal-distribute-center"} {...others} />);
}

export default Component;
