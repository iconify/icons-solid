import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ay0nfocfj {
  fill: currentColor;
  d: path("M36 104a12 12 0 0 1 7.85-11.26l152-56a12 12 0 1 1 8.3 22.52L82.71 104l121.44 44.74A12 12 0 0 1 200 172a11.9 11.9 0 0 1-4.15-.74l-152-56A12 12 0 0 1 36 104m164 84H48a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24");
}
</style><path class="ay0nfocfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:less-than-or-equal-bold"} {...others} />);
}

export default Component;
