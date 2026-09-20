import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a-9gr4b8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.731 24H23.27a2.257 2.257 0 0 0-2.25 2.25a2.257 2.257 0 0 0 2.25 2.25h1.462a2.257 2.257 0 0 0 2.25-2.25a2.257 2.257 0 0 0-2.25-2.25m-.001 0a2.257 2.257 0 0 0 2.25-2.25a2.257 2.257 0 0 0-2.25-2.25H23.27a2.257 2.257 0 0 0-2.25 2.25A2.257 2.257 0 0 0 23.27 24");
}

.uph4zqc9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28");
}
</style><path class="a-9gr4b8k"/><path class="uph4zqc9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:calendar-google-8"} {...others} />);
}

export default Component;
