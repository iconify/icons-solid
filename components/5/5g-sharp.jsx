import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pdnt74bqf {
  fill: currentColor;
  d: path("M3.5 16.5v-1h5v-3h-5v-5h6v1h-5v3h5v5zm17-5v5h-8v-9h8v1h-7v7h6v-3H17v-1z");
}
</style><path class="pdnt74bqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:5g-sharp"} {...others} />);
}

export default Component;
