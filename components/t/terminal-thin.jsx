import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ixfgcebns {
  fill: currentColor;
  d: path("M116 128a4 4 0 0 1-1.34 3l-72 64a4 4 0 1 1-5.32-6L106 128L37.34 67a4 4 0 0 1 5.32-6l72 64a4 4 0 0 1 1.34 3m100 60h-96a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8");
}
</style><path class="ixfgcebns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:terminal-thin"} {...others} />);
}

export default Component;
