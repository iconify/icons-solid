import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i772mtbhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.272 42.5a6.99 6.99 0 0 0 6.992-6.992V24.567a6.99 6.99 0 0 0-6.992-6.984H13.331a6.99 6.99 0 0 0-6.988 6.984a6.99 6.99 0 0 0 6.988 6.996h3.942V35.5a6.99 6.99 0 0 0 6.988 6.995h.011zm6.992-12.083h3.401c3.86 0 6.99-3.128 6.992-6.988a6.99 6.99 0 0 0-6.992-6.991h-3.938v-3.946A6.99 6.99 0 0 0 23.735 5.5h-.003a6.99 6.99 0 0 0-6.992 6.992v5.09");
}
</style><path class="i772mtbhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mobvoi-health"} {...others} />);
}

export default Component;
