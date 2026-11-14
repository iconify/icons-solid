import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lyridbsdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 5.5l3.5 1l3 4l3 4.5l2 1.75h7.5m-19 2.75h19v2h-19Zm0-9H4m8.5 0H14m2.5 0H18m2 0h1.5");
}
</style><path class="lyridbsdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:loan-overdraft-limit"} {...others} />);
}

export default Component;
