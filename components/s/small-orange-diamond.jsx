import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.q_06f8bjf {
  fill: var(--svg-color--f6921e, #f6921e);
  d: path("M32.725 56.013L8.407 32.077l24.32-23.941l24.315 23.941z");
}
</style><path class="q_06f8bjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:small-orange-diamond"} {...others} />);
}

export default Component;
