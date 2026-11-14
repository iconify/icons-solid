import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.djjrbfb_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c-1.5-2.25-3-3-4.75-3C5.4 9 4 10.4 4 12s1.4 3 3.25 3C9 15 10.5 14.25 12 12s3-3 4.75-3C18.6 9 20 10.4 20 12s-1.4 3-3.25 3C15 15 13.5 14.25 12 12");
}
</style><path class="djjrbfb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:infinity"} {...others} />);
}

export default Component;
