import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.p004l-b5z {
  fill: currentColor;
  d: path("M192 26H64a22 22 0 0 0-22 22v160a22 22 0 0 0 22 22h128a22 22 0 0 0 22-22V48a22 22 0 0 0-22-22M54 70h148v116H54Zm10-32h128a10 10 0 0 1 10 10v10H54V48a10 10 0 0 1 10-10m128 180H64a10 10 0 0 1-10-10v-10h148v10a10 10 0 0 1-10 10");
}
</style><path class="p004l-b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:device-tablet-light"} {...others} />);
}

export default Component;
