import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuxr_fxyo {
  d: path("M18 21.5v-3.75c-2.75 0-3.5-1.75-3.5-3.25c2.5 0 3.5 1.5 3.5 3.25C18 15.5 19.5 14 21.5 14c0 2-1.5 3.5-3.5 3.75");
}

.jc2od-bco {
  d: path("M13.1 18.5H2.5v-15h15v8.7M2.5 8h15M7 2v3m6-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jc2od-bco"/><path class="cuxr_fxyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:seed-calendar"} {...others} />);
}

export default Component;
