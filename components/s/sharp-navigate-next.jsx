import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jsxicibnj {
  fill: currentColor;
  d: path("M10.02 6L8.61 7.41L13.19 12l-4.58 4.59L10.02 18l6-6z");
}
</style><path class="jsxicibnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-navigate-next"} {...others} />);
}

export default Component;
