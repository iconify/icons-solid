import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cbi3x0bda {
  fill: currentColor;
  d: path("M132 24v208a4 4 0 0 1-8 0V24a4 4 0 0 1 8 0");
}
</style><path class="cbi3x0bda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:line-vertical-thin"} {...others} />);
}

export default Component;
