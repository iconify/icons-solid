import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zw3cz61yj {
  fill: currentColor;
  d: path("M20 10V7h-3V5h5v5zM2 10V5h5v2H4v3zm15 9v-2h3v-3h2v5zM2 19v-5h2v3h3v2z");
}
</style><path class="zw3cz61yj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:screenshot-frame-2-sharp"} {...others} />);
}

export default Component;
