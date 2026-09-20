import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yr4p98bnk {
  fill: currentColor;
  d: path("M60 56a4 4 0 0 1 4-4h128a4 4 0 0 1 0 8H64a4 4 0 0 1-4-4m156 108a4 4 0 0 0-4 4v20h-36a20 20 0 0 1-20-20v-52h52a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8h52v12a60.07 60.07 0 0 1-60 60a4 4 0 0 0 0 8a68.07 68.07 0 0 0 68-68v-12h40v52a28 28 0 0 0 28 28h40a4 4 0 0 0 4-4v-24a4 4 0 0 0-4-4");
}
</style><path class="yr4p98bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-cny-thin"} {...others} />);
}

export default Component;
