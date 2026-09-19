import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nedw_kb-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.472 16.938l25.712 7.595s-1.75 3.425-6.837 3.99");
}

.o03mxccjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.926 38.522S12.278 42.019 6.65 30.25s.833-21.916 7.44-21.91c5.882.007 9.725 5.478 9.725 5.478s-9.715.987-8.143 10.622s12.834 17.62 22.853 14.553L17.472 16.938L43.5 32.913a11.3 11.3 0 0 1-8.303 2.593");
}
</style><path class="nedw_kb-o"/><path class="o03mxccjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:canary"} {...others} />);
}

export default Component;
