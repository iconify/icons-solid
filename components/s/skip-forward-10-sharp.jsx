import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.auiddgbej {
  d: path("M20.25 3.75v4.5h-4.5m-8.25 2l1.5-1v5.5m5.5-5.5H16v5.5h-3v-5.5z");
}

.kk_gz9o8o {
  d: path("M20.25 12a8.25 8.25 0 1 1-2.42-5.83l2.42 2.08");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kk_gz9o8o"/><path class="auiddgbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:skip-forward-10-sharp"} {...others} />);
}

export default Component;
