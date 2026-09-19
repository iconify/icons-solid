import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ner54rqfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.781 18.166h21.391l-4.606-4.606m4.606 4.618l-4.606 4.606M6.16 32.646h21.287L22.84 28.04m4.607 4.618l-4.606 4.606m14.76 5.236v-37l-4.606 4.606M37.613 5.5l4.606 4.606");
}
</style><path class="ner54rqfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:arrow-escape"} {...others} />);
}

export default Component;
