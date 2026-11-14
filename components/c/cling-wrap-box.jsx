import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ackg-fb3x {
  d: path("M9.5 12L16 9l5 1.5V17");
}

.ir_1-rbys {
  d: path("M6.5 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h.01");
}

.ujgeyzb3n {
  d: path("M3 9h13v12H3V9l1.5-6.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ujgeyzb3n"/><path class="ackg-fb3x"/><path class="ir_1-rbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cling-wrap-box"} {...others} />);
}

export default Component;
