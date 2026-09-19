import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.od6ziru9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.857 15.136h20.286m-6.091-6.584a4.052 4.052 0 0 0-8.104 0H9.298V43.5h29.403V8.552z");
}

.xazr_i00f {
  cx: 24px;
  cy: 8.552px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="od6ziru9m"/><circle class="xazr_i00f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:simple-clipboard-editor"} {...others} />);
}

export default Component;
