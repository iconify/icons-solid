import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.agzn98nil {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.5c4 0 6-2 9.25-2s5.25 2 9.25 2m-18.5 7c4 0 6-2 9.25-2s5.25 2 9.25 2");
}

.aw18wcbea {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 12h.01M12 10h.01m5.49 2h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="agzn98nil"/><path class="aw18wcbea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:blood-vessel"} {...others} />);
}

export default Component;
