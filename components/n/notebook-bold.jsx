import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.s8-hc1b1q {
  fill: currentColor;
  d: path("M108 108a12 12 0 0 1 12-12h56a12 12 0 0 1 0 24h-56a12 12 0 0 1-12-12m68 28h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m52-88v160a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20M52 204h16V52H52ZM204 52H92v152h112Z");
}
</style><path class="s8-hc1b1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notebook-bold"} {...others} />);
}

export default Component;
