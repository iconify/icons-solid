import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x7g59fbsb {
  fill: currentColor;
  d: path("M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5zM7.43 7L5.66 5h12.69l-1.78 2z");
}
</style><path class="x7g59fbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-local-bar"} {...others} />);
}

export default Component;
