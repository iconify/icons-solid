import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mnr58s2jh {
  d: path("M3 4h18v17H3Zm5-1.5v4m8-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzqga_vdc {
  d: path("m12.763 7.288l4.949 4.949l-2.475 2.475l-4.949-4.949Zm-.013 4.962L7 18");
}
</style><g class="ulnmmdpxh"><path class="mnr58s2jh"/><path class="yzqga_vdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:court-date"} {...others} />);
}

export default Component;
