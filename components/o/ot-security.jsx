import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fyxj-4b7c {
  d: path("m18 14.5l3.25 1.25V18c0 1.75-1.35 2.9-3.25 3.5c-1.9-.6-3.25-1.75-3.25-3.5v-2.25Z");
}

.jmoohcbsb {
  d: path("M12.462 20.5H3v-9l5-3v3l5-3v3h3.5v-8h4v8.938M6.5 15.5h2m3 0h.4m-5.9 0h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jmoohcbsb"/><path class="fyxj-4b7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ot-security"} {...others} />);
}

export default Component;
