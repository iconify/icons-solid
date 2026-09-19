import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e8-o9yb8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.723 38.588l3.453.12L24 32.061v-5.416L5.5 9.292zm20.554 0l-3.453.12L24 32.061v-5.416L42.5 9.292z");
}
</style><path class="e8-o9yb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mahindra-for-you"} {...others} />);
}

export default Component;
