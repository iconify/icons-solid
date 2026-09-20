import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bu3e3bbkv {
  fill: currentColor;
  d: path("M2 20V4h20v16zm8-2h10V6H10zm-2 0V6H4v12zm-4 0V6zm4 0h2zM8 6h2z");
}
</style><path class="bu3e3bbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:thumbnail-bar-outline-sharp"} {...others} />);
}

export default Component;
