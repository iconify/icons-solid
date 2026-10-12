import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.din0wxu_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 2.75h7.75v7H13.5zm3.88 0v2m-14.63 16h18.5M3.5 17C5 12.5 7 9 8.25 10.5c1.1 1.4-2.25 5.75-.5 6.25c1.5.4 2.75-3.5 4-3.25c1.1.2.25 3 1.75 3.1l.471.024L16 15");
}
</style><path class="din0wxu_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:signature-delivery-sharp"} {...others} />);
}

export default Component;
