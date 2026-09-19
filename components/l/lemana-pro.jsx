import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u1w_24pjz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.791 42.12V22.088L24 5.88l16.209 16.208V42.12z");
}

.yivkbgu5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.502 33.836h12.996v-7.843L24 19.495l-6.498 6.498v15.823m12.996-28.819L24 19.495");
}
</style><path class="u1w_24pjz"/><path class="yivkbgu5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lemana-pro"} {...others} />);
}

export default Component;
