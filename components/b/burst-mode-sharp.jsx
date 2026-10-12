import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hb7moqkly {
  d: path("M2.75 8.75v6.5m3-8.5v10.5m3-12.5h12.5v14.5H8.75z");
}

.lfem3dbxp {
  d: path("M18 12a3 3 0 1 1-6 0a3 3 0 1 1 6 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hb7moqkly"/><path class="lfem3dbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:burst-mode-sharp"} {...others} />);
}

export default Component;
