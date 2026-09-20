import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q7xe92bpy {
  d: path("M7 7h10v4H7Z");
}

.w329m1boj {
  d: path("M7 14h6v4H7Z");
}
</style><g class="nrj6p8qat"><path class="crv4i00bu"/><path class="q7xe92bpy"/><path class="w329m1boj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:align-start-vertical-outline-regular"} {...others} />);
}

export default Component;
