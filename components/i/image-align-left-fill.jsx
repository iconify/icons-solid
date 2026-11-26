import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g9r55mb4m {
  d: path("M3 3H21M3 21H21");
}

.hi_y07b4g {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 6L11 6C12.6569 6 14 7.3431 14 9L14 15C14 16.6569 12.6569 18 11 18L5 18C3.3431 18 2 16.6569 2 15L2 9C2 7.3431 3.3431 6 5 6Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="hi_y07b4g"/><path class="g9r55mb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:image-align-left-fill"} {...others} />);
}

export default Component;
