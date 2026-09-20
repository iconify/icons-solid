import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s0e08pjxm {
  d: path("M9.5 9v6.5h6");
}

.tkunh7htz {
  d: path("m13 13 2.5 2.5L13 18");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="s0e08pjxm"/><path class="tkunh7htz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:corrective-action-outline-regular"} {...others} />);
}

export default Component;
