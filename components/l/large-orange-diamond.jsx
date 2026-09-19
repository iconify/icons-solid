import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.lriubg22d {
  fill: var(--svg-color--f6921e, #f6921e);
  d: path("M63 32L32 62.998L1 32L32 1");
}
</style><path class="lriubg22d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:large-orange-diamond"} {...others} />);
}

export default Component;
