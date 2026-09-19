import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ijklq_2vl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.46 5.5l9.9 5.5v10.69l9.4-5.43l10.08 5.61l-19.48 11.26l-5 2.9l-4.9 2.83l-6.3 3.64V31.06l6.3-3.64z");
}
</style><path class="ijklq_2vl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yatse"} {...others} />);
}

export default Component;
