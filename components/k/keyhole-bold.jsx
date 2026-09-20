import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.plt10cb0c {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-144a44 44 0 0 0-33.61 72.41l-9.86 32.06A12 12 0 0 0 96 188h64a12 12 0 0 0 11.47-15.53l-9.86-32.06A44 44 0 0 0 128 68m8.53 72.51l7.22 23.49h-31.5l7.22-23.49a12 12 0 0 0-4-12.89a20 20 0 1 1 25 0a12 12 0 0 0-3.94 12.89");
}
</style><path class="plt10cb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:keyhole-bold"} {...others} />);
}

export default Component;
