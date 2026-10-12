import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kidbz-ayb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.38 9.62zq.89.88.62 2.91q-.26 2.03-2.38 4.15l-2.3 2.3q-2.12 2.12-4.24 0l-1.06-1.06q-2.12-2.12 0-4.24l2.3-2.3Q9.44 9.26 11.47 9q2.03-.27 2.91.62M11.2 12.8l-3.53 3.53M21.1 2.9l-6.71 6.71");
}
</style><path class="kidbz-ayb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:screwdriver"} {...others} />);
}

export default Component;
