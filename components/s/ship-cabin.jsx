import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a03kq1_oe {
  d: path("M2.75 6.5h18.5m-13.5 3h1v1h-1Zm4 0h1v1h-1Zm4 0h1v1h-1Zm-8.5 7.75V13.5h2v3.75m-6.5 0h18.5L19.5 20.4a1.5 1.5 0 0 1-1.31.85H5.81a1.5 1.5 0 0 1-1.31-.85Zm1.5 0h15.5");
}

.c2ppmhbzp {
  width: 15.5px;
  height: 10.75px;
  x: 4.25px;
  y: 6.5px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="c2ppmhbzp"/><path class="a03kq1_oe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ship-cabin"} {...others} />);
}

export default Component;
