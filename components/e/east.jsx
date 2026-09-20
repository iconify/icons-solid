import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tmkmlebje {
  fill: currentColor;
  d: path("m15 19l-1.425-1.4l4.6-4.6H2v-2h16.175L13.6 6.4L15 5l7 7z");
}
</style><path class="tmkmlebje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:east"} {...others} />);
}

export default Component;
