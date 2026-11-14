import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fg7jt41bt {
  d: path("M3 7.5V3h4.5m9 0H21v4.5m-18 9V21h4.5m7.056-6.698L11.5 16L7 13.5v-5L11.5 6L16 8.5v5l-1.182.657");
}

.uh2hvuu2o {
  d: path("m7 8.5l4.5 2.5L16 8.5M11.5 11v5m3.25 2l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fg7jt41bt"/><path class="uh2hvuu2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:object-scan-check"} {...others} />);
}

export default Component;
