import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t4g5kt4iv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31 24l-10.453 6.035v-12.07zM4.5 39.5h39m-39-31h39m-4 6v23c0 1.108-.892 2-2 2m-29-6v-23c0-1.108.892-2 2-2");
}
</style><path class="t4g5kt4iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zoho-show"} {...others} />);
}

export default Component;
