import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rhs3fmblo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10.5c-3-6-8.5-6-8.5-2c0 3 4.5 4 8.5 2m0 0c3-6 8.5-6 8.5-2c0 3-4.5 4-8.5 2m0 0l-5.5 9m5.5-9l5.5 9");
}
</style><path class="rhs3fmblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:alpine-butterfly-knot"} {...others} />);
}

export default Component;
