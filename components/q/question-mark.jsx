import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.uviys1bsr {
  fill: currentColor;
  d: path("M192 96c0 28.51-24.47 52.11-56 55.56V160a8 8 0 0 1-16 0v-16a8 8 0 0 1 8-8c26.47 0 48-17.94 48-40s-21.53-40-48-40s-48 17.94-48 40a8 8 0 0 1-16 0c0-30.88 28.71-56 64-56s64 25.12 64 56m-64 96a16 16 0 1 0 16 16a16 16 0 0 0-16-16");
}
</style><path class="uviys1bsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:question-mark"} {...others} />);
}

export default Component;
