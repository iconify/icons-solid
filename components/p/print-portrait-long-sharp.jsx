import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dvkdxrbjn {
  fill: currentColor;
  d: path("M4 10V7h1V3.95L6.35 3L14 5.775V21.4l-1.35.95L5 19.575V17H4v-3h1v-4zm12 10V4.275L12.475 3H19v17z");
}
</style><path class="dvkdxrbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:print-portrait-long-sharp"} {...others} />);
}

export default Component;
