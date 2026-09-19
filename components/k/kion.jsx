import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wduo3tydo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.167 20h14v8h-14zM43.5 20v8l-8-8v8m-20.667-8v8M4.5 20v8m7-8L8 24l3.5 4M8 24H4.5");
}
</style><path class="wduo3tydo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:kion"} {...others} />);
}

export default Component;
