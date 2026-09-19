import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k-bg8nb3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.972 14.637L40.5 7.5L26.522 21.478zM3.5 16.011l14.244 14.245l6.014-6.014z");
}

.reapv0bav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.363 41.028l-6.841-19.55L40.5 7.5zM31.989 44.5l-8.23-20.258l-6.015 6.014z");
}
</style><path class="reapv0bav"/><path class="k-bg8nb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fly-delta"} {...others} />);
}

export default Component;
