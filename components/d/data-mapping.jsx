import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m06v3797n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h5v3h-5Zm0 7h5v3h-5Zm0 7h5v3h-5Zm14-14h5v3h-5Zm0 7h5v3h-5Zm0 7h5v3h-5ZM7.5 5l9 7m-9 0l9-7m-9 14h9");
}
</style><path class="m06v3797n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:data-mapping"} {...others} />);
}

export default Component;
