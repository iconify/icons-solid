import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bohqmuuzi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.48 17.52a13.44 13.44 0 0 0 4.94 4.25");
}

.t0ubz-6tv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.79 4.5C34.16 8.4 40.4 18.38 40.4 27.1a16.4 16.4 0 0 1-32.8 0c0-.43 0-.85.05-1.28c.57-11.15 8.26-14.57 8.26-14.57s.76 4 2.57 6.27c0 0 8-5.42 7.31-13Z");
}
</style><path class="t0ubz-6tv"/><path class="bohqmuuzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tinder"} {...others} />);
}

export default Component;
