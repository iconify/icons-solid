import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ws1h0cycp {
  fill: currentColor;
  d: path("M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v64H56V56Zm-96 80v64H88v-64Zm16 0h16v64h-16Zm32 0h16v64h-16Zm-96 0h16v64H56Zm144 64h-16v-64h16z");
}
</style><path class="ws1h0cycp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:square-half-bottom"} {...others} />);
}

export default Component;
