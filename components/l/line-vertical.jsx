import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o2qd2hb1p {
  fill: currentColor;
  d: path("M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0");
}
</style><path class="o2qd2hb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:line-vertical"} {...others} />);
}

export default Component;
