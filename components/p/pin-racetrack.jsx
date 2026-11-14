import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qcsa44b0h {
  d: path("M4.5 2.5v19m0-18h15v10h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.znvx79hss {
  fill: currentColor;
  d: path("M4.5 3.5h5v5h-5Zm10 0h5v5h-5Zm-5 5h5v5h-5Z");
}
</style><g class="ulnmmdpxh"><path class="qcsa44b0h"/><path class="znvx79hss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-racetrack"} {...others} />);
}

export default Component;
