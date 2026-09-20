import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aldhtcwgq {
  fill: currentColor;
  d: path("M3 14v-2h14q.825 0 1.413-.587T19 10t-.587-1.412T17 8H5.825l1.6 1.575L6 11L2 7l4-4l1.425 1.4l-1.6 1.6H17q1.65 0 2.825 1.175T21 10t-1.175 2.825T17 14zm0 8v-6h18v6zm2-2h3.325v-2H5zm5.325 0h3.325v-2h-3.325zm5.35 0H19v-2h-3.325z");
}
</style><path class="aldhtcwgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:repartition-outline"} {...others} />);
}

export default Component;
