import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xs8_ejdrv {
  fill: currentColor;
  d: path("M7 9v6h4l5 5V4l-5 5z");
}
</style><path class="xs8_ejdrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-volume-mute"} {...others} />);
}

export default Component;
