import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ltzp_hbnj {
  d: path("M17 2.5C17 7 7 7 7 12s10 5 10 9.5M9.25 12h5.5M9 4h6M9 20h6");
}

.ptn0dtbna {
  d: path("M7 2.5C7 7 17 7 17 12S7 17 7 21.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ptn0dtbna"/><path class="ltzp_hbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dna-helix"} {...others} />);
}

export default Component;
