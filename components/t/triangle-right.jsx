import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o7p0yj1eb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.443 5.29l7.647 4.44a2.625 2.625 0 0 1 0 4.54l-7.647 4.44A2.625 2.625 0 0 1 4.5 16.44V7.56a2.625 2.625 0 0 1 3.943-2.27");
}
</style><path class="o7p0yj1eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:triangle-right"} {...others} />);
}

export default Component;
