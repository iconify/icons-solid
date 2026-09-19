import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ddovr0uap {
  fill: var(--svg-color--333, #333);
  d: path("M16 16h32v32H16z");
}
</style><path class="ddovr0uap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:black-small-square"} {...others} />);
}

export default Component;
