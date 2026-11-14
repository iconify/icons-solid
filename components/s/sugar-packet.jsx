import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uk6lcib6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 4l1-1l1 1l1-1l1 1l1-1l1 1l1-1l1 1v16l-1 1l-1-1l-1 1l-1-1l-1 1l-1-1l-1 1l-1-1Zm0 5.5h8m-8 5h8");
}
</style><path class="uk6lcib6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sugar-packet"} {...others} />);
}

export default Component;
