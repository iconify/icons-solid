import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vikvaq5nj {
  fill: currentColor;
  d: path("M5 17v-2h2v2zm9 0v-2h4v-2h-4V7h6v2h-4v2h4v6zm-5 0l2-8H7V7h6v1.8L11 17z");
}
</style><path class="vikvaq5nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speed-0-75-sharp"} {...others} />);
}

export default Component;
