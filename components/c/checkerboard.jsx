import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xyc7mgqic {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-12.69 88L136 60.69V48h12.69L208 107.32V120ZM136 83.31L172.69 120H136Zm72 1.38L171.31 48H208ZM120 48v72H48V48Zm-12.69 160L48 148.69V136h12.69L120 195.31V208ZM120 172.69L83.31 136H120Zm-72-1.38L84.69 208H48ZM208 208h-72v-72h72z");
}
</style><path class="xyc7mgqic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:checkerboard"} {...others} />);
}

export default Component;
