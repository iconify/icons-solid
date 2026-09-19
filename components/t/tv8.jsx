import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.poapep6nt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.21 20l-2.6 8l-2.6-8m12.58 4c-1.1 0-2 .9-2 2s.9 2 2 2h1.3c1.1 0 2-.9 2-2s-.9-2-2-2m.1 0c1.1 0 2-.9 2-2s-.9-2-2-2h-1.3c-1.1 0-2 .9-2 2s.9 2 2 2m-.1 0h1.4");
}

.ubmk71hef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M12.01 20h5.2m-2.6 8v-8");
}
</style><path class="ubmk71hef"/><path class="poapep6nt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tv8"} {...others} />);
}

export default Component;
