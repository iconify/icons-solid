import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fmyh_4b_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.867 31.39v-7.908a4.133 4.133 0 0 1 8.266 0v7.909M9.5 31.39v-7.908a4.133 4.133 0 0 1 8.267 0v7.909m12.466-.001v-7.908a4.133 4.133 0 0 1 8.267 0v7.909");
}

.i7u6rk80i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-29 11.11h29");
}
</style><path class="i7u6rk80i"/><path class="fmyh_4b_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:intesa"} {...others} />);
}

export default Component;
