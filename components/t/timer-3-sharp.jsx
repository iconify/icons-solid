import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ibfk2gb2y {
  fill: currentColor;
  d: path("M8 19v-3h6v-2.5H9v-3h5V8H8V5h9v5.5L15.5 12l1.5 1.5V19z");
}
</style><path class="ibfk2gb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:timer-3-sharp"} {...others} />);
}

export default Component;
