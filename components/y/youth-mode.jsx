import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iw5w8f5qo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.211 43.5a2.25 2.25 0 0 1-2.252-2.252v-3.9a8.77 8.77 0 0 1 3.137-6.724l15.808-13.248a8.77 8.77 0 0 0 3.137-6.724v-3.9A2.25 2.25 0 0 0 32.79 4.5H15.21a2.25 2.25 0 0 0-2.252 2.252v3.9a8.77 8.77 0 0 0 3.137 6.724l15.808 13.248a8.77 8.77 0 0 1 3.137 6.724v3.9a2.25 2.25 0 0 1-2.25 2.252z");
}
</style><path class="iw5w8f5qo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:youth-mode"} {...others} />);
}

export default Component;
