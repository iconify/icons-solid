import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eh254zbxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.3 20.344v-7.4a7.4 7.4 0 1 0-7.4 7.4h22.2a7.4 7.4 0 1 0-7.4-7.4l.034 7.4m-7.468 7.313l.034 7.4a7.4 7.4 0 1 1-7.4-7.4h22.2a7.4 7.4 0 1 1-7.4 7.4v-7.4");
}
</style><path class="eh254zbxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:detran-df"} {...others} />);
}

export default Component;
