import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.od2kd3bdj {
  fill: var(--svg-color--1b75bb, #1b75bb);
  d: path("M32.507 56.655L8.136 32.667L32.507 8.678l24.366 23.989z");
}
</style><path class="od2kd3bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:small-blue-diamond"} {...others} />);
}

export default Component;
