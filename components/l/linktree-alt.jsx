import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qibak2beu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.126 17.707h9.598L10.9 11.202l3.776-3.882l6.505 6.687V4.5h5.64v9.508l6.506-6.672l3.773 3.866l-6.82 6.49h9.595v5.368h-9.65l6.866 6.672l-3.764 3.79l-9.325-9.37l-9.326 9.37l-3.775-3.775l6.868-6.672H8.126zm13.04 13.056h5.64V43.5h-5.64z");
}
</style><path class="qibak2beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:linktree-alt"} {...others} />);
}

export default Component;
