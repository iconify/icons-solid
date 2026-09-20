import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ttpjlkb2a {
  fill: currentColor;
  d: path("M44 192v8a4 4 0 0 1-8 0v-8a4 4 0 0 1 8 0");
}
</style><path class="ttpjlkb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cell-signal-none-thin"} {...others} />);
}

export default Component;
