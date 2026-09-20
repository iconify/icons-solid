import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9j5hbbqz {
  fill: currentColor;
  d: path("M3 23V1h18v22zm7-3h4v-1h-4zm-5-4h14V6H5z");
}
</style><path class="c9j5hbbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tablet-android-sharp"} {...others} />);
}

export default Component;
