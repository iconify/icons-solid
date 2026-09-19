import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.dxs3_thzc {
  fill: var(--svg-color--d0d0d0, #d0d0d0);
  d: path("M16 16h32v32H16z");
}
</style><path class="dxs3_thzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:white-small-square"} {...others} />);
}

export default Component;
