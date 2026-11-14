import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vefgkpbzh {
  d: path("M12 16q-1.25-1.25 0-2.5t0-2.5t0-2.5");
}

.zao27lbio {
  d: path("M2.5 4h19v16h-19ZM8 4v10m8-4v10");
}
</style><g class="ulnmmdpxh"><path class="zao27lbio"/><path class="vefgkpbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:heating-zone"} {...others} />);
}

export default Component;
