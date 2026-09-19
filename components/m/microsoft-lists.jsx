import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zk4oiryht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5H14.75L5.5 14.75V38.5a4 4 0 0 0 4 4h23.75l9.25-9.25V9.5a4 4 0 0 0-4-4m-33 27.75h37M5.5 24h37m-37-9.25h37m-27.75 0V42.5");
}
</style><path class="zk4oiryht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:microsoft-lists"} {...others} />);
}

export default Component;
