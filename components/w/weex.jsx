import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g9u17fofz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.237 20.492l-2.251 7.016l-2.118-7.016l-2.25 7.016L8.5 20.492m31 0l-5.295 7.016m5.295 0l-5.295-7.016m-10.199 5.692c-.398.795-1.324 1.324-2.25 1.324a2.655 2.655 0 0 1-2.648-2.647V23.14c0-1.457 1.19-2.648 2.647-2.648s2.648 1.191 2.648 2.648v.926h-5.295m8.219 2.118c.397.795 1.324 1.324 2.25 1.324a2.655 2.655 0 0 0 2.648-2.647V23.14c0-1.457-1.191-2.648-2.647-2.648s-2.648 1.191-2.648 2.648v.926h5.295");
}

.ydqthzbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4");
}
</style><path class="g9u17fofz"/><path class="ydqthzbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:weex"} {...others} />);
}

export default Component;
