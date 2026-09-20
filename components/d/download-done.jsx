import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xy3tgwc8b {
  fill: currentColor;
  d: path("m9.55 16l-5.675-5.675L5.3 8.9l4.25 4.25L18.7 4l1.425 1.425zM5 20v-2h14v2z");
}
</style><path class="xy3tgwc8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:download-done"} {...others} />);
}

export default Component;
