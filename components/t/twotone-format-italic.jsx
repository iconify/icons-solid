import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qmfalhmpb {
  fill: currentColor;
  d: path("M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z");
}
</style><path class="qmfalhmpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-format-italic"} {...others} />);
}

export default Component;
