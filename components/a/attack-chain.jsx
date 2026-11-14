import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g5ogw-q3r {
  d: path("m2.404 18.414l6.01-6.01l3.182 3.182l-6.01 6.01Z");
}

.rwqqhuvec {
  d: path("m12.404 8.414l6.01-6.01l3.182 3.182l-6.01 6.01Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygy1rpboz {
  d: path("m7.404 13.414l6.01-6.01l3.182 3.182l-6.01 6.01Z");
}
</style><g class="ulnmmdpxh"><path class="g5ogw-q3r"/><path class="ygy1rpboz"/><path class="rwqqhuvec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:attack-chain"} {...others} />);
}

export default Component;
