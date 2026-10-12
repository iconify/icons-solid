import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ko0xn-byz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6.25h12v2.5h-7v4.75l.71-.23l5.1-1.64l1.19-.38v2.5l-1.15.49l-5.16 2.21l-.69.3V19H3V6.25zm14.25 2.5h1.5m-1.5 2.5h1.5");
}
</style><path class="ko0xn-byz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pinch-hand-sharp"} {...others} />);
}

export default Component;
