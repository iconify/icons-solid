import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d0_tp9tgh {
  fill: currentColor;
  d: path("M14 8.83v6.34L11.83 13H9v-2h2.83zM16 4l-5 5H7v6h4l5 5z");
}
</style><path class="d0_tp9tgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-volume-mute"} {...others} />);
}

export default Component;
