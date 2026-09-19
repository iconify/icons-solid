import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9u-rma7q {
  fill: currentColor;
  d: path("M5.41 20L17 8.41V15h2V5H9v2h6.59L4 18.59z");
}
</style><path class="c9u-rma7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-call-made"} {...others} />);
}

export default Component;
