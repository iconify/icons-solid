import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qg4llmb_d {
  fill: currentColor;
  d: path("M6 21v-8h10V6.8l-1.6 1.6L13 7l4-4l4 4l-1.4 1.4L18 6.8V15H8v6z");
}
</style><path class="qg4llmb_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:turn-sharp-right-sharp"} {...others} />);
}

export default Component;
