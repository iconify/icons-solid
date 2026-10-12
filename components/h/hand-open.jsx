import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uu7ir99qr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7a1.29 1.29 0 0 1 2.58 0a1.29 1.29 0 0 1 2.59 0a1.29 1.29 0 0 1 2.58 0v8.5a3.88 3.88 0 0 1-7.75 0ZM13.5 7a1.29 1.29 0 0 1 2.58 0a1.29 1.29 0 0 1 2.59 0a1.29 1.29 0 0 1 2.58 0v8.5a3.88 3.88 0 0 1-7.75 0Z");
}
</style><path class="uu7ir99qr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hand-open"} {...others} />);
}

export default Component;
