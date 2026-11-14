import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pym5vjb_d {
  d: path("M4 3h16v18.5H4Zm0 4h16");
}

.tlhn7sbyt {
  d: path("M8 18c0-5 3-8 8-8c0 5-3 8-8 8Zm0 0l4.5-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pym5vjb_d"/><path class="tlhn7sbyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bioplastic-leaf"} {...others} />);
}

export default Component;
