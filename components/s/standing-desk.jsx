import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ppyvn8bfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7H15v3H2.5Zm1 14.5h4m-2 0V10M10 21.5h4m-2 0V10m5.25-3.75L19.5 4l2.25 2.25M19.5 4v16m-2.25-2.25L19.5 20l2.25-2.25");
}
</style><path class="ppyvn8bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:standing-desk"} {...others} />);
}

export default Component;
