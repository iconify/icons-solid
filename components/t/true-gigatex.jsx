import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lhhe59byw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.363 22.244l-9.788 18.623H6.271l9.788-18.624z");
}

.oaqt-8lch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.696 19.129L24 7.132l17.73 33.734h-6.305L24 19.13z");
}
</style><path class="lhhe59byw"/><path class="oaqt-8lch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:true-gigatex"} {...others} />);
}

export default Component;
