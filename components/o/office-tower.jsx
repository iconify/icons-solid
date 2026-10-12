import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cj7ju-wcc {
  d: path("M6 20.5V7.25q0-.75.72-.97l10.56-3.31q.72-.22.72.53v17q0 .75-.75.75H6.75q-.75 0-.75-.75m0-9h12m-6-6.87V14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r2i-aue9o {
  width: 4px;
  height: 4.25px;
  x: 10px;
  y: 17px;
  rx: 0.5px;
}
</style><g class="hntgybcog"><path class="cj7ju-wcc"/><rect class="r2i-aue9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:office-tower"} {...others} />);
}

export default Component;
