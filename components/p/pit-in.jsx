import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzuvp1brt {
  d: path("M4.5 2.5h5A3.5 3.5 0 0 1 13 6v10.5");
}

.smi5gzb5e {
  d: path("M10.25 13.75L13 16.5l2.75-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xgp7uacfz {
  d: path("M7 10h12v11.5H7Z");
}
</style><g class="ulnmmdpxh"><path class="xgp7uacfz"/><path class="fzuvp1brt"/><path class="smi5gzb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pit-in"} {...others} />);
}

export default Component;
