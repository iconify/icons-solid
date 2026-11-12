import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l6-4u2bgq {
  stroke-linejoin: round;
  d: path("M4 12H14M11 15L14 12L11 9");
}

.smxwd1bfv {
  d: path("M12 4C16.4183 4 20 7.58172 20 12M18.2454 17C16.7793 18.8289 14.5264 20 12 20");
}
</style><g class="ipq1z-bjh"><path class="smxwd1bfv"/><path class="l6-4u2bgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:login-broken"} {...others} />);
}

export default Component;
