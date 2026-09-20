import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nlfixfo7b {
  fill: currentColor;
  d: path("M8 16.5h8l-4-4zM5 19h14v-9H5zm-2 2V3h18v18z");
}
</style><path class="nlfixfo7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:top-panel-close-sharp"} {...others} />);
}

export default Component;
