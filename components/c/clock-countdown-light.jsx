import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.w_3zgqbov {
  fill: currentColor;
  d: path("M230 136.49A102.12 102.12 0 1 1 119.51 26a6 6 0 0 1 1 12A90.13 90.13 0 1 0 218 135.51a6 6 0 1 1 12 1ZM122 72v56a6 6 0 0 0 6 6h56a6 6 0 0 0 0-12h-50V72a6 6 0 0 0-12 0m38-26a10 10 0 1 0-10-10a10 10 0 0 0 10 10m36 24a10 10 0 1 0-10-10a10 10 0 0 0 10 10m24 36a10 10 0 1 0-10-10a10 10 0 0 0 10 10");
}
</style><path class="w_3zgqbov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:clock-countdown-light"} {...others} />);
}

export default Component;
