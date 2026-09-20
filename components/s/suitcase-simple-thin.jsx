import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.lviovvjxg {
  fill: currentColor;
  d: path("M216 60h-44V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12M92 48a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92ZM40 68h176a4 4 0 0 1 4 4v76H36V72a4 4 0 0 1 4-4m176 136H40a4 4 0 0 1-4-4v-44h184v44a4 4 0 0 1-4 4");
}
</style><path class="lviovvjxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:suitcase-simple-thin"} {...others} />);
}

export default Component;
