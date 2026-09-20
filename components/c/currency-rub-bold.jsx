import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qqiwiyhws {
  fill: currentColor;
  d: path("M148 156a64 64 0 0 0 0-128H88a12 12 0 0 0-12 12v92H56a12 12 0 0 0 0 24h20v16H56a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0v-20h44a12 12 0 0 0 0-24h-44v-16ZM100 52h48a40 40 0 0 1 0 80h-48Z");
}
</style><path class="qqiwiyhws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-rub-bold"} {...others} />);
}

export default Component;
