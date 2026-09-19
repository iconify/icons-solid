import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kg-n76gtw {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-2 13H3V5h18z");
}
</style><path class="kg-n76gtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-video-label"} {...others} />);
}

export default Component;
