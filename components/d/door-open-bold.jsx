import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.e3wgi5ilq {
  fill: currentColor;
  d: path("M232 212h-20V40a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v172H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24m-44 0h-16V44h16ZM68 44h80v168H68Zm68 84a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="e3wgi5ilq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:door-open-bold"} {...others} />);
}

export default Component;
