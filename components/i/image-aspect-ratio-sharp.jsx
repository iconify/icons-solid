import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w44bdulww {
  fill: currentColor;
  d: path("M6 12h2v-2H6zm4 0h2v-2h-2zm4 4h2v-2h-2zm0-4h2v-2h-2zM2 20V4h20v16z");
}
</style><path class="w44bdulww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:image-aspect-ratio-sharp"} {...others} />);
}

export default Component;
