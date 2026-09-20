import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y_a00mb8o {
  fill: currentColor;
  d: path("m12 22l-7-7l1.4-1.4l4.6 4.575V2h2v16.175l4.6-4.6L19 15z");
}
</style><path class="y_a00mb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:south-outline-sharp"} {...others} />);
}

export default Component;
