import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.ud2pbr_rc {
  d: path("M13.196 20.367L12 21l-8.5-4.5v-9L12 3l8.5 4.5v4.765M3.5 7.5l5.745 3.041m5.567-.03L20.5 7.5M12 12v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ud2pbr_rc"/><path class="e9fltbcec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:return-approved"} {...others} />);
}

export default Component;
