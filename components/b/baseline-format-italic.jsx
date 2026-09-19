import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tqb3xcc4m {
  fill: currentColor;
  d: path("M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z");
}
</style><path class="tqb3xcc4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-format-italic"} {...others} />);
}

export default Component;
