import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pxg4flwco {
  d: path("M16.9998 18.9999L10.9998 11.9999L16.9998 4.99988");
}

.uvan74bwi {
  d: path("M12.9999 19L6.99989 12L12.9999 5");
}
</style><g class="hntgybcog"><path class="uvan74bwi"/><path class="pxg4flwco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-left-linear"} {...others} />);
}

export default Component;
