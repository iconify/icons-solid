import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.st36oxqlk {
  fill: currentColor;
  d: path("M120 44v168a4 4 0 0 1-4 4H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h60a4 4 0 0 1 4 4m80-4h-60a4 4 0 0 0-4 4v168a4 4 0 0 0 4 4h60a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16");
}
</style><path class="st36oxqlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:square-split-horizontal-fill"} {...others} />);
}

export default Component;
