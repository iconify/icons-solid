import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.erkqwpm1w {
  fill: currentColor;
  d: path("M7 2v11h3v9l7-12h-4l3-8z");
}
</style><path class="erkqwpm1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-flash-on"} {...others} />);
}

export default Component;
