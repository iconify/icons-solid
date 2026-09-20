import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dvsx2kb7s {
  fill: currentColor;
  d: path("M207.23 203.42a8 8 0 0 1-10.66 3.81l-152-72a8 8 0 0 1 0-14.46l152-72a8 8 0 1 1 6.85 14.46L66.69 128l136.73 64.77a8 8 0 0 1 3.81 10.65");
}
</style><path class="dvsx2kb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:less-than"} {...others} />);
}

export default Component;
