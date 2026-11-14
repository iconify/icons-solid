import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m4m_dv0ma {
  d: path("M6.5 11.5h11v6h-11ZM7 5.75h.01m3.49 0h.01");
}

.mwkz7acvc {
  d: path("M2.5 3h19v17.5h-19Zm0 5.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mwkz7acvc"/><path class="m4m_dv0ma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:galley-oven"} {...others} />);
}

export default Component;
