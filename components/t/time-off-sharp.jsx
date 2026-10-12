import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ngayx2bsa {
  d: path("M12 7.5V12H8.5M3.75 3.75l16.5 16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xglklabzt {
  cx: 12px;
  cy: 12px;
  r: 8.5px;
}
</style><g class="x2cwu0gfd"><circle class="xglklabzt"/><path class="ngayx2bsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:time-off-sharp"} {...others} />);
}

export default Component;
