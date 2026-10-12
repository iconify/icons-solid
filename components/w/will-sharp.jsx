import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rk10g6uxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h10.5v18.5H2.75zM6 7h4.5M6 10.25h3m7.75 2.5h4.5l-.14.48l-.97 3.29L20 17l.14.48l.97 3.29l.14.48h-5l.14-.48l.97-3.29l.14-.48l-.14-.48l-.97-3.29l-.14-.48z");
}
</style><path class="rk10g6uxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:will-sharp"} {...others} />);
}

export default Component;
