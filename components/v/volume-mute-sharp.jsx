import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-cu5rj5k {
  fill: currentColor;
  d: path("M7 15V9h4l5-5v16l-5-5z");
}
</style><path class="c-cu5rj5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:volume-mute-sharp"} {...others} />);
}

export default Component;
