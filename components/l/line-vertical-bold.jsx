import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kp91cnxcc {
  fill: currentColor;
  d: path("M140 24v208a12 12 0 0 1-24 0V24a12 12 0 0 1 24 0");
}
</style><path class="kp91cnxcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:line-vertical-bold"} {...others} />);
}

export default Component;
