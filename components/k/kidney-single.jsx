import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zixc_v_yy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 3.5C9 3.5 6 7.25 6 12s3 8.5 7.5 8.5c2.5 0 4.25-1.5 3.75-3.75c-.4-1.75-2.5-2.75-2.5-4.75s2.1-3 2.5-4.75C17.75 5 16 3.5 13.5 3.5Zm1.25 8.5H20");
}
</style><path class="zixc_v_yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kidney-single"} {...others} />);
}

export default Component;
