import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.llhhv4axt {
  cx: 24px;
  cy: 29.565px;
  r: 13.935px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mqy5rzopb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.413 16.099c-3.808-.443-7.061-4.407-6.553-11.472c5.642-.813 10.928 2.222 10.826 11.022m5.947-7.922c-3.253 2.694-4.524 7.904-4.524 7.904");
}
</style><circle class="llhhv4axt"/><path class="mqy5rzopb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fitbook"} {...others} />);
}

export default Component;
