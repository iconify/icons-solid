import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v5ocx5b0m {
  fill: currentColor;
  d: path("M8.866 20v-1h6.269v1zm0-2l-.847-5.942L9.79 5h4.423l1.769 7.058L15.135 18zm.859-1h4.55l.627-4.5H9.073zm-.54-5.5h5.63L13.45 6h-2.9zm5.09 5.5h-4.55z");
}
</style><path class="v5ocx5b0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tools-flat-head-outline"} {...others} />);
}

export default Component;
