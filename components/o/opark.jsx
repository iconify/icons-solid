import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b-455xbvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.002 32.768A9.3 9.3 0 1 1 36.4 24a15.5 15.5 0 0 1-12.344 15.175");
}

.gn6v4rbhu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.056 39.174a15.499 15.499 0 1 1-.101-30.369");
}

.xu6nonb0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.028 15.242A9.3 9.3 0 1 1 11.6 24.001h0a15.5 15.5 0 0 1 27.795-9.436a15.5 15.5 0 0 1-15.399 24.62");
}
</style><path class="gn6v4rbhu"/><path class="xu6nonb0g"/><path class="b-455xbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:opark"} {...others} />);
}

export default Component;
