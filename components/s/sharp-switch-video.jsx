import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rfavfbb2f {
  fill: currentColor;
  d: path("M18 9.5V5H2v14h16v-4.5l4 4v-13zm-5 6V13H7v2.5L3.5 12L7 8.5V11h6V8.5l3.5 3.5z");
}
</style><path class="rfavfbb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-switch-video"} {...others} />);
}

export default Component;
