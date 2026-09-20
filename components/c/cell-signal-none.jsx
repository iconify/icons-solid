import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.r8fxz-3nj {
  fill: currentColor;
  d: path("M48 192v8a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0");
}
</style><path class="r8fxz-3nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cell-signal-none"} {...others} />);
}

export default Component;
