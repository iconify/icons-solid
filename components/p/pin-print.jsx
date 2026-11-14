import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lsxyjfbrl {
  d: path("M7 14h10v6.5H7Zm2.5 3.25h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzj_vg3lx {
  d: path("M7 17H5.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H17v-3H7Zm0-9V4.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V8");
}
</style><g class="ulnmmdpxh"><path class="xzj_vg3lx"/><path class="lsxyjfbrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-print"} {...others} />);
}

export default Component;
