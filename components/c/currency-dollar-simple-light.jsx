import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ollky8wjq {
  fill: currentColor;
  d: path("M198 168a46.06 46.06 0 0 1-46 46h-18v18a6 6 0 0 1-12 0v-18h-18a46.06 46.06 0 0 1-46-46a6 6 0 0 1 12 0a34 34 0 0 0 34 34h48a34 34 0 0 0 0-68h-40a46 46 0 0 1 0-92h10V24a6 6 0 0 1 12 0v18h10a46.06 46.06 0 0 1 46 46a6 6 0 0 1-12 0a34 34 0 0 0-34-34h-32a34 34 0 0 0 0 68h40a46.06 46.06 0 0 1 46 46");
}
</style><path class="ollky8wjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-dollar-simple-light"} {...others} />);
}

export default Component;
