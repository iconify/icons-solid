import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.chlsoskvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 33.598v-8.586l6.04-6.04h7.432l9.74 9.74l-.388.388h-9.14l-.644.643l4.38 4.38l-8.376 8.377z");
}

.kpgwyacyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.598 5.5h-8.586l-6.04 6.04v7.432l9.74 9.74l.388-.388v-9.14l.643-.644l4.38 4.38l8.377-8.376z");
}
</style><path class="chlsoskvz"/><path class="kpgwyacyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mojm"} {...others} />);
}

export default Component;
