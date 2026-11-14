import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g9u6ytbrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.768 12.757l2.475 2.475l-6.011 6.011l-2.475-2.475ZM10 14l4.5-4.5m0 0c1-3 3-6 6-6.75c.5 3-2.5 5.75-6 6.75Z");
}
</style><path class="g9u6ytbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dental-elevator"} {...others} />);
}

export default Component;
