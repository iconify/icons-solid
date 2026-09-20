import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jfrb4ob6j {
  fill: currentColor;
  d: path("M212 100a12 12 0 0 1-12 12h-60v100a12 12 0 0 1-24 0V112H56a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12M56 64h144a12 12 0 0 0 0-24H56a12 12 0 0 0 0 24");
}
</style><path class="jfrb4ob6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-kzt-bold"} {...others} />);
}

export default Component;
