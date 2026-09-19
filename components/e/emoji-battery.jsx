import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a6t1uccgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.7 18.3h20.954v11.602H8.7z");
}

.pr8znobsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.35 20.735v-4.37a.61.61 0 0 0-.612-.61H6.112a.61.61 0 0 0-.612.61v15.27c0 .337.274.61.612.61H38.74a.61.61 0 0 0 .612-.61V27.56H42.5v-6.826z");
}
</style><path class="pr8znobsp"/><path class="a6t1uccgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-battery"} {...others} />);
}

export default Component;
