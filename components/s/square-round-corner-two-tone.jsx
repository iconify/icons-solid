import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9g90kbtr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11 9.5C11.8284 9.5 12.5 10.1716 12.5 11C12.5 11.8284 11.8284 12.5 11 12.5C10.1716 12.5 9.5 11.8284 9.5 11C9.5 10.1716 10.1716 9.5 11 9.5Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zzvusooig {
  d: path("M3 21V11C3 6.5817 6.5817 3 11 3H21M11 11L5.3431 5.3431");
}
</style><g class="nrj6p8qat"><path class="zzvusooig"/><path clip-rule="evenodd" class="m9g90kbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-round-corner-two-tone"} {...others} />);
}

export default Component;
