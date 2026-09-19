import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ibgwb5_tb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 19.525V2.507m5.164 16.329L39.198 8.802M28.475 24h17.018m-16.329 5.164l10.034 10.034M24 28.475v17.018m-5.164-16.329L8.802 39.198M19.525 24H2.507m16.329-5.164L8.802 8.802");
}
</style><path class="ibgwb5_tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:seneca"} {...others} />);
}

export default Component;
