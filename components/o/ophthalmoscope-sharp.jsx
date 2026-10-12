import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lxdf-tbmp {
  cx: 12px;
  cy: 7px;
  r: 2px;
}

.ox5c_rb0b {
  d: path("M7.25 2.75h9.5v8.5h-9.5z");
}

.wczh1skrd {
  d: path("M19.75 4.75v4.5m-10.25 2v10h5v-10Zm0 3.75h5m-5 3h5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ox5c_rb0b"/><circle class="lxdf-tbmp"/><path class="wczh1skrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ophthalmoscope-sharp"} {...others} />);
}

export default Component;
