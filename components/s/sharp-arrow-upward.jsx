import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aikwr8n5r {
  fill: currentColor;
  d: path("m4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z");
}
</style><path class="aikwr8n5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-arrow-upward"} {...others} />);
}

export default Component;
