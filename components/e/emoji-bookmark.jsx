import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.acuw_lbhm {
  fill: none;
  stroke: currentColor;
  d: path("M32.277 42.5L24 33.34l-8.277 9.16v-37h16.554z");
}

.c-zrgpb5l {
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><defs><path id="SVGwiCtPWFr" class="acuw_lbhm"/></defs><use href="#SVGwiCtPWFr" class="c-zrgpb5l"/><use href="#SVGwiCtPWFr" class="c-zrgpb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-bookmark"} {...others} />);
}

export default Component;
