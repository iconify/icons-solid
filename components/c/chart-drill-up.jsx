import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jpnx5ygfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h19v4.5h-19Zm9.5-2v-4.5m-2.25 2.25L12 10.5l2.25 2.25M2.5 2.5h4.75V8H2.5Zm7.25 0h4.5V8h-4.5Zm7 0h4.75V8h-4.75Z");
}
</style><path class="jpnx5ygfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-drill-up"} {...others} />);
}

export default Component;
