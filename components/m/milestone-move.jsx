import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rd3ousbki {
  d: path("m9 9.5l3.5 3.5L9 16.5L5.5 13Zm-6.5 10h19M9 6.5c3-3.75 9-3.25 10.5 3.75");
}

.sj6cdsbsm {
  d: path("m17 8.75l2.5 1.5l1.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rd3ousbki"/><path class="sj6cdsbsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:milestone-move"} {...others} />);
}

export default Component;
