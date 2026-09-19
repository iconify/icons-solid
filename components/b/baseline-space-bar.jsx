import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.klvgiqbuv {
  fill: currentColor;
  d: path("M18 9v4H6V9H4v6h16V9z");
}
</style><path class="klvgiqbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-space-bar"} {...others} />);
}

export default Component;
