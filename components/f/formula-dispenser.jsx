import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rve-ifblg {
  d: path("M6 9h12v12.5H6ZM5 6h14v3H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yyq6y1b0t {
  d: path("m6.5 3.5l6.5-1h5c0 4.75-5 4.75-5 0");
}
</style><g class="ulnmmdpxh"><path class="rve-ifblg"/><path class="yyq6y1b0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:formula-dispenser"} {...others} />);
}

export default Component;
