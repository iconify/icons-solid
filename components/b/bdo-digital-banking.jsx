import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.u19-ddbuc {
  width: 7.172px;
  height: 10.826px;
  x: 30.328px;
  y: 18.587px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.586px;
  ry: 3.586px;
}

.yl-bcd0jg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.595 29.413V18.587h2.436a4.736 4.736 0 0 1 4.736 4.736v1.354a4.736 4.736 0 0 1-4.736 4.736zM14.966 24a2.707 2.707 0 0 1 0 5.413H10.5V18.587h4.466a2.707 2.707 0 0 1 0 5.413m0 0H10.5");
}
</style><path class="ll0g54h-q"/><path class="yl-bcd0jg"/><rect class="u19-ddbuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bdo-digital-banking"} {...others} />);
}

export default Component;
