import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k56d62gzl {
  fill: currentColor;
  d: path("M5 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0h-4v12h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V6H7a1 1 0 0 1-2 0Z");
}
</style><path class="k56d62gzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-fill-round"} {...others} />);
}

export default Component;
