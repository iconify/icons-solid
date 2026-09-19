import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f2eh1tbmb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.112 11.601h8.2v24.797h-8.2zm33.776 5.298L36.788 24L15.313 11.602l4.1-7.102zM19.413 43.5l-4.1-7.102L36.788 24l4.1 7.101z");
}
</style><path class="f2eh1tbmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bbc-iplayer"} {...others} />);
}

export default Component;
