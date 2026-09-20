import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhg0dv4qn {
  fill: currentColor;
  d: path("M8 20v-4H4v-2h4v-4H4V8h4V4h2v4h4V4h2v4h4v2h-4v4h4v2h-4v4h-2v-4h-4v4zm2-6h4v-4h-4z");
}
</style><path class="zhg0dv4qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:grid-3x3"} {...others} />);
}

export default Component;
