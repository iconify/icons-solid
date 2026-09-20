import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qthpquwpf {
  fill: currentColor;
  d: path("M4.5 21q-.95 0-1.55-.737t-.4-1.688l3.1-14q.15-.7.7-1.138T7.6 3h8.8q.7 0 1.25.437t.7 1.138l3.1 14q.2.95-.4 1.688T19.5 21zm6.5-9.175V16h2v-4.175l1.6 1.575L16 12l-4-4l-4 4l1.4 1.425z");
}
</style><path class="qthpquwpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tilt-arrow-up"} {...others} />);
}

export default Component;
