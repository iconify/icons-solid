import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tgx030-6f {
  d: path("M3 2.5h18v19H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wmvcgsl3t {
  d: path("M7.5 11.75h9a2.25 2.25 0 0 0 0-4.5a3.75 3.75 0 0 0-7 1a2 2 0 0 0-2 3.5Zm1 2.75v4m3.5-4V19m3.5-4.5v3");
}
</style><g class="ulnmmdpxh"><path class="tgx030-6f"/><path class="wmvcgsl3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cloud-chamber"} {...others} />);
}

export default Component;
