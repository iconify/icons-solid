import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ntriw8brh {
  d: path("M2.5 14a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vn_cumlzi {
  d: path("M6.5 14a3 7 0 1 0 6 0a3 7 0 1 0-6 0Zm-4 0h14m1.5-3s-3.5-3-3.5-5.5a3.5 3.5 0 0 1 7 0C21.5 8 18 11 18 11Z");
}
</style><g class="ulnmmdpxh"><path class="ntriw8brh"/><path class="vn_cumlzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:visitors-by-country"} {...others} />);
}

export default Component;
