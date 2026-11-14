import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fvmqlzpyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 14l4-4m-2.5-3L13 5.5a3.5 3.5 0 0 1 5.5 5.5L17 12.5M12.5 17L11 18.5A3.5 3.5 0 0 1 5.5 13L7 11.5");
}
</style><path class="fvmqlzpyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:merchant-payment-link"} {...others} />);
}

export default Component;
