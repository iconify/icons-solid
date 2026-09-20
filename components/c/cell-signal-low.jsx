import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cnlk927ir {
  fill: currentColor;
  d: path("M88 152v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m-48 32a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8");
}
</style><path class="cnlk927ir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cell-signal-low"} {...others} />);
}

export default Component;
