import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ak-1gcc1i {
  d: path("M14 12.75v8.75l2.25-2l1.5 2.5l1.75-1l-1.5-2.25l3-.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.znbdlsbag {
  d: path("M11.2 19.5H2.5v-16h17v10.2M9 3.5V9m4-5.5v4.8");
}
</style><g class="ulnmmdpxh"><path class="znbdlsbag"/><path class="ak-1gcc1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:click-and-collect"} {...others} />);
}

export default Component;
