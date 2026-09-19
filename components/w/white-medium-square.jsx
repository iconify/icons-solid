import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.d5_qy-b0i {
  fill: var(--svg-color--d0d2d3, #d0d2d3);
  d: path("M53.935 49.29a4.71 4.71 0 0 1-4.707 4.713h-34.27a4.71 4.71 0 0 1-4.708-4.713V15.03a4.71 4.71 0 0 1 4.708-4.709h34.27c2.6 0 4.707 2.109 4.707 4.709z");
}
</style><path class="d5_qy-b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:white-medium-square"} {...others} />);
}

export default Component;
