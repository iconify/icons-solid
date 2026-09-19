import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x4olb7b7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.03 33.03l-4.257 3.373V42.5h4.257m23.94-9.47l4.257 3.373V42.5H35.97M25.81 22.937v-7.495L24 5.5l-1.81 9.942v7.495l-10.16 8.05V42.5h9.07v-5.058a2.9 2.9 0 0 1 5.8 0V42.5h9.07V30.988zM24 21.264v-2.006m1.81-3.816l.855.534m-4.475-.534l-.905.502");
}
</style><path class="x4olb7b7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:church"} {...others} />);
}

export default Component;
