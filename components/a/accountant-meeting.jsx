import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l2on1gunl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7a3.25 3.25 0 1 0 6.5 0A3.25 3.25 0 1 0 3 7Zm11.5 0A3.25 3.25 0 1 0 21 7a3.25 3.25 0 1 0-6.5 0Zm-12 8.5C2.5 14 4 13 6.25 13S10 14 10 15.5m4 0c0-1.5 1.5-2.5 3.75-2.5s3.75 1 3.75 2.5m-19 0h19m-9.5 0v5m-3 0h6");
}
</style><path class="l2on1gunl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:accountant-meeting"} {...others} />);
}

export default Component;
