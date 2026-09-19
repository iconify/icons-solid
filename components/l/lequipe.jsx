import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.q-m9yi7jp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.932 15.731l1.568-4.31h-9.129l.956-2.626h-5.556l-.956 2.627h-7.712l-1.568 4.31h3.742l-8.544 23.473h18.655l1.568-4.31h-9.129l2.704-7.427h9.129l1.568-4.31h-9.129l2.704-7.427zm-24.703-4.309h-8.77l-1.568 4.31h2.116L5.5 22.62c5.481 0 8.541-5.188 10.729-11.198");
}
</style><path class="q-m9yi7jp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lequipe"} {...others} />);
}

export default Component;
