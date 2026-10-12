import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wehx_fkvx {
  d: path("m15.36 7.58l1.77 1.77l1.06 1.06l-1.06 1.06l-7.43 7.42l-1.06 1.06l-1.06-1.06l-1.77-1.76l-1.06-1.06l1.06-1.06l7.43-7.43l1.06-1.06z");
}

.wndv29b2n {
  d: path("m15.43 7.65l1.63 1.63l.42.42l.42-.42l.93-.93l.42-.42l-.16-.58l-.74-2.72l-.16-.58l-.42.42l-2.34 2.34l-.42.42zm-3.61 1.34l3.89 3.89");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wehx_fkvx"/><path class="wndv29b2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:marker-sharp"} {...others} />);
}

export default Component;
