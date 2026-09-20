import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bnv69t_xo {
  fill: currentColor;
  d: path("M198.12 25.23a16 16 0 0 0-17.43 3.47l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a16 16 0 0 0-9.88-14.77M192 200H32L192 40Z");
}
</style><path class="bnv69t_xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cell-signal-none-duotone"} {...others} />);
}

export default Component;
