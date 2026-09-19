import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.udpqpldnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4m-28-26.897h11.126m-5.563 16.794V15.603m-2.204 16.794h4.408M10.5 17.807v-2.204m11.126 2.204v-2.204");
}

.wmlkawqvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.301 24a4.199 4.199 0 0 1 0 8.397h-6.927V15.603H33.3a4.199 4.199 0 0 1 0 8.397m.001 0h-6.927m-2.205-8.397h2.205m-2.205 16.794h2.205");
}
</style><path class="udpqpldnv"/><path class="wmlkawqvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tinybit-alt"} {...others} />);
}

export default Component;
