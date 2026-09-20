import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ff1h2ka1d {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 144a8 8 0 0 1-16 0v-40H88v40a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v40h80V80a8 8 0 0 1 16 0Z");
}
</style><path class="ff1h2ka1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-h-fill"} {...others} />);
}

export default Component;
