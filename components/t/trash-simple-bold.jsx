import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.eyzk6fbjd {
  fill: currentColor;
  d: path("M216 48H40a12 12 0 0 0 0 24h4v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V72h4a12 12 0 0 0 0-24m-28 156H68V72h120ZM76 20A12 12 0 0 1 88 8h80a12 12 0 0 1 0 24H88a12 12 0 0 1-12-12");
}
</style><path class="eyzk6fbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:trash-simple-bold"} {...others} />);
}

export default Component;
