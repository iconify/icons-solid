import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p23wiew8n {
  d: path("M15.75 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm-3 3h6");
}

.rk_nsx0ok {
  d: path("M2.75 5.25h18.5v13.5H2.75zM6 10h4.25M6 14h2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rk_nsx0ok"/><path class="p23wiew8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:driver-license-sharp"} {...others} />);
}

export default Component;
