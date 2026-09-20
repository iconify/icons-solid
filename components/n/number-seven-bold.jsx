import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.j0h1-ubrs {
  fill: currentColor;
  d: path("m179.49 51.45l-48 160A12 12 0 0 1 120 220a11.8 11.8 0 0 1-3.45-.51a12 12 0 0 1-8-14.94L151.87 60H88a12 12 0 0 1 0-24h80a12 12 0 0 1 11.49 15.45");
}
</style><path class="j0h1-ubrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-seven-bold"} {...others} />);
}

export default Component;
