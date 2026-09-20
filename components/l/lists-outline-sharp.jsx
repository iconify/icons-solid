import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uz2kiccjn {
  fill: currentColor;
  d: path("M2 20v-4h4v4zm6 0v-4h14v4zm-6-6v-4h4v4zm6 0v-4h14v4zM2 8V4h4v4zm6 0V4h14v4z");
}
</style><path class="uz2kiccjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:lists-outline-sharp"} {...others} />);
}

export default Component;
