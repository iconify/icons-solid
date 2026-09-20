import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.bacbiccoq {
  fill: currentColor;
  d: path("M18 15a2 2 0 0 1-2 2h-3.5a1.5 1.5 0 0 1-1.5-1.5v-2a.5.5 0 0 0-.5-.499h-1a.5.5 0 0 0-.5.5V15.5A1.5 1.5 0 0 1 7.5 17H4a2 2 0 0 1-2-2V9.73c.294.17.635.27 1 .27h14c.365 0 .706-.1 1-.27zM9.02 3.259a2 2 0 0 1 1.96 0l6 3.376a2 2 0 0 1 1.006 1.52A1 1 0 0 1 17 9H3a1 1 0 0 1-.987-.846a2 2 0 0 1 1.007-1.52z");
}
</style><path class="bacbiccoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:building-yurt-20-filled"} {...others} />);
}

export default Component;
