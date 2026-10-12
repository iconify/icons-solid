import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g80xiktcv {
  d: path("M10 21.25v-6.5h4v6.5");
}

.k_tw80b1o {
  d: path("M2.75 21.25V12a9.25 9.25 0 0 1 18.5 0v9.25ZM7 4.25v17m10-17v17");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k_tw80b1o"/><path class="g80xiktcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:greenhouse-sharp"} {...others} />);
}

export default Component;
