import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y4qz8cbee {
  fill: currentColor;
  d: path("M244 124h-40.58l-24-48H192a12 12 0 0 0 0-24H64a12 12 0 0 0 0 24h12.58l-24 48H12a12 12 0 0 0 0 24h28.58l-19.31 38.63a12 12 0 1 0 21.46 10.73L67.42 148h121.16l24.69 49.36a12 12 0 1 0 21.46-10.73L215.42 148H244a12 12 0 0 0 0-24m-164.58 0l24-48h49.16l24 48Z");
}
</style><path class="y4qz8cbee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:picnic-table-bold"} {...others} />);
}

export default Component;
