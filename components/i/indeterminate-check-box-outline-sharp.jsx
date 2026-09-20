import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j6ufwm74y {
  fill: currentColor;
  d: path("M7.5 12.5h9v-1h-9zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="j6ufwm74y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:indeterminate-check-box-outline-sharp"} {...others} />);
}

export default Component;
