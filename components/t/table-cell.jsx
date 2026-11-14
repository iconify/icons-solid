import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a5jk5wbcp {
  d: path("M2.5 3.5h19v17h-19Zm9.5 0v17M2.5 12h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xiht9r5_j {
  fill: currentColor;
  d: path("M15 14.75h3.75v3H15Z");
}
</style><g class="ulnmmdpxh"><path class="a5jk5wbcp"/><path class="xiht9r5_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:table-cell"} {...others} />);
}

export default Component;
