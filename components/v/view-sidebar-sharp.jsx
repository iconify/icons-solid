import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t27c6cbvb {
  fill: currentColor;
  d: path("M18 8V4h4v4zm0 6v-4h4v4zM2 20V4h14v16zm16 0v-4h4v4z");
}
</style><path class="t27c6cbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-sidebar-sharp"} {...others} />);
}

export default Component;
