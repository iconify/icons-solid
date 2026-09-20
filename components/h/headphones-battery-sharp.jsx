import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-k0v4ixy {
  fill: currentColor;
  d: path("M2 18v-6q0-2.5 1.75-4.25T8 6t4.25 1.75T14 12v6h-4v-5h2.5v-1q0-1.875-1.312-3.187T8 7.5T4.813 8.813T3.5 12v1H6v5zm14 0V7h2V6h2v1h2v11z");
}
</style><path class="y-k0v4ixy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:headphones-battery-sharp"} {...others} />);
}

export default Component;
