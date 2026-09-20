import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yk1uh2y2z {
  fill: currentColor;
  d: path("M7 17V9H5V7h4v10zm4 0v-2h2v2zm5 0V9h-2V7h4v10zm-5-4v-2h2v2z");
}
</style><path class="yk1uh2y2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-real-size-outline"} {...others} />);
}

export default Component;
