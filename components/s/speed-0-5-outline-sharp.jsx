import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fl_go2b-w {
  fill: currentColor;
  d: path("M7.75 16.5v-1h1v1zm2.5 0v-1h4v-3h-4v-5h5v1h-4v3h4v5z");
}
</style><path class="fl_go2b-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:speed-0-5-outline-sharp"} {...others} />);
}

export default Component;
