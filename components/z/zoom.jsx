import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bhjycerch {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M34.86 18.63v10.53l8.64 7.16V11.68ZM6.42 12.31h21.7c3.16 0 6.53 2.53 6.53 5.9v15.16a2.11 2.11 0 0 1-2.1 2.11H10.22c-3.59 0-5.69-3.37-5.69-6.53V14.41a1.83 1.83 0 0 1 1.89-2.1Z");
}
</style><path class="bhjycerch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zoom"} {...others} />);
}

export default Component;
