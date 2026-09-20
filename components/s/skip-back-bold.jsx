import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vupnv7bjd {
  fill: currentColor;
  d: path("M201.75 30.52a20 20 0 0 0-20.3.53L68 102V40a12 12 0 0 0-24 0v176a12 12 0 0 0 24 0v-62l113.45 71A20 20 0 0 0 212 208.12V47.88a19.86 19.86 0 0 0-10.25-17.36M188 200.73L71.7 128L188 55.27Z");
}
</style><path class="vupnv7bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:skip-back-bold"} {...others} />);
}

export default Component;
