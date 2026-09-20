import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bfhqw6b6d {
  fill: currentColor;
  d: path("M2 20V4h20v16zm12-6h2v-2h2v-2h-2V8h-2v2h-2v2h2z");
}
</style><path class="bfhqw6b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:magnify-fullscreen-sharp"} {...others} />);
}

export default Component;
