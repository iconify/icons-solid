import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.qie9yjbau {
  fill: currentColor;
  d: path("M16 4a1 1 0 1 1 0 2H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-9a1 1 0 1 1 2 0v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm7.293-.707a1 1 0 0 1 1.414 1.414L13.121 16.293L11 17l.707-2.121z");
}
</style><path class="qie9yjbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:compose-28-filled"} {...others} />);
}

export default Component;
