import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y4szobcxm {
  fill: currentColor;
  d: path("M216 60h-44V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12M92 48a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92Zm128 152a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-64-64a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4");
}
</style><path class="y4szobcxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:first-aid-kit-thin"} {...others} />);
}

export default Component;
