import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bxj8ntb2b {
  fill: currentColor;
  d: path("M5 19V9.808h3V19zm5.5 0v-8.5l3 3V19zm3-8.311l-3-3V5h3zm5.5 5.5l-1.961-1.962v-.035H19zm.833 5.07L2.74 4.168l.713-.713l17.092 17.092z");
}
</style><path class="bxj8ntb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bar-chart-off"} {...others} />);
}

export default Component;
