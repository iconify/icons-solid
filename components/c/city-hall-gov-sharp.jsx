import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqkn0s45q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13h18.5v8.25H2.75z");
}

.hii7d4whw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v2.5M8.75 13V8.5L12 5.25l3.25 3.25V13Z");
}

.igmzrdbbr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15.5v3m12-3v3m-7.25 2.75V17h2.5v4.25");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wcpvigl8r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10h.01");
}
</style><g class="ux2u0rbkq"><path class="hii7d4whw"/><path class="wcpvigl8r"/><path class="bqkn0s45q"/><path class="igmzrdbbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:city-hall-gov-sharp"} {...others} />);
}

export default Component;
