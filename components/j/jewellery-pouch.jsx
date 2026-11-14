import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dy_ov93zp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9c-4 2-5.5 5.5-5.5 8.25s3 4.25 8.5 4.25s8.5-1.5 8.5-4.25S19 11 15 9Zm0 0L7.5 4.5L10 5.75L12 3l2 2.75l2.5-1.25L15 9m-3 0l-2 4m2-4l2 4");
}
</style><path class="dy_ov93zp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:jewellery-pouch"} {...others} />);
}

export default Component;
