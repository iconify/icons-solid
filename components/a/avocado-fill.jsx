import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xwrxm6b6v {
  fill: currentColor;
  d: path("m211 130.66l-29.8-84.19a56 56 0 0 0-106-1.14l-29.51 83.5A88 88 0 1 0 211 130.66M128 200a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
}
</style><path class="xwrxm6b6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:avocado-fill"} {...others} />);
}

export default Component;
