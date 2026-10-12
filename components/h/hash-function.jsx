import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rq2-zvyzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 5.75L9 18.25m6-12.5l-1.5 12.5m-6.5-9h10m-10.75 5.5h10M2.75 12h2.5m13.5 0h2.5m-1.5-1.75l1.5 1.75l-1.5 1.75");
}
</style><path class="rq2-zvyzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hash-function"} {...others} />);
}

export default Component;
