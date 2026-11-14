import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.krsibmlfn {
  d: path("M3.5 10h9v9h-9ZM8 5a9.5 9.5 0 0 1 9.5 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vei8xtc9f {
  d: path("m14.75 11.75l2.75 2.75l2.75-2.75");
}
</style><g class="ulnmmdpxh"><path class="krsibmlfn"/><path class="vei8xtc9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rotate-90-cw"} {...others} />);
}

export default Component;
