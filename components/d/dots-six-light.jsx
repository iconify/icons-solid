import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.sy110ch9a {
  fill: currentColor;
  d: path("M70 92a10 10 0 1 1-10-10a10 10 0 0 1 10 10m58-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 20a10 10 0 1 0-10-10a10 10 0 0 0 10 10M60 154a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="sy110ch9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dots-six-light"} {...others} />);
}

export default Component;
