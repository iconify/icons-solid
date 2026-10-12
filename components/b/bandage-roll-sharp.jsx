import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p_0o2nbub {
  d: path("M10.25 9.75a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 1 1 0-4.5Zm7 5.25h4v4h-4Z");
}

.uwnh69b_r {
  d: path("M10.25 19a7 7 0 1 1 7-7v7Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="uwnh69b_r"/><path class="p_0o2nbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bandage-roll-sharp"} {...others} />);
}

export default Component;
