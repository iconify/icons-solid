import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.yv1t7levl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.785 8.4v25.45c0 5.426 6.295 9.65 11.046 9.65c5.47 0 8.416-.813 11.384-3.022l-5.298-5.428c-2.085 1.163-4.62 2.236-7.342-.65V18.8h8.158v-7.15h-8.158V4.5z");
}
</style><path class="yv1t7levl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:turff"} {...others} />);
}

export default Component;
