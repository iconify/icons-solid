import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.giapj4r2v {
  d: path("M6 16.75h12v2H6Z");
}

.k3fvgccbs {
  d: path("M3.5 14h17a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V15a1 1 0 0 1 1-1ZM3 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm9.75-1.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm5.75 4.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k3fvgccbs"/><path class="giapj4r2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-personal-care"} {...others} />);
}

export default Component;
