import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h652xwbro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.61 23.062v6.397m-4.45-9.305v9.305m-4.444-12.334v12.337m-4.452-7.801v7.798m2.934-17.9a8.44 8.44 0 0 0-8.364 7.386A7.387 7.387 0 0 0 4.5 26.34c0 4.079 3.304 7.39 7.379 7.39h8.53l3.66 2.712l3.659-2.711h9.448a6.295 6.295 0 0 0 1.382-12.443A7.534 7.534 0 0 0 27.09 15.14a8.43 8.43 0 0 0-6.892-3.576z");
}
</style><path class="h652xwbro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dreammapper"} {...others} />);
}

export default Component;
