import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.csx4t6b2j {
  d: path("M16 11.5q0 3.5-2.5 5.5m-.5 3h.01");
}

.gtdtfrzlu {
  d: path("M12 4.5h8v3a4 4 0 0 1-8 0ZM2.5 6H12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gtdtfrzlu"/><path class="csx4t6b2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:batik-tjanting"} {...others} />);
}

export default Component;
