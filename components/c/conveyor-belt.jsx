import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.svya-5bmz {
  d: path("M3 11h18v5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xml_qfblm {
  d: path("M5.5 13.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0Zm1.5-8h4V11H7Zm7 1h4V11h-4ZM6 20v-1.5M18 20v-1.5");
}
</style><g class="ulnmmdpxh"><path class="svya-5bmz"/><path class="xml_qfblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:conveyor-belt"} {...others} />);
}

export default Component;
