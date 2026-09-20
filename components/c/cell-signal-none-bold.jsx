import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pojefpbfh {
  fill: currentColor;
  d: path("M52 192v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0");
}
</style><path class="pojefpbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cell-signal-none-bold"} {...others} />);
}

export default Component;
