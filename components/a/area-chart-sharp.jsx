import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u0g_alb_o {
  fill: currentColor;
  d: path("m20 16.48l-8.208-6.407l-3.975 5.494L4 12.557V9l3.23 2.423l4.962-6.98L16.654 8H20zM4 19v-5.212L8 17l4-5.5l8 6.237V19z");
}
</style><path class="u0g_alb_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:area-chart-sharp"} {...others} />);
}

export default Component;
