import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w-5e-6bny {
  fill: currentColor;
  d: path("M10 8.64L15.27 12L10 15.36zM8 5v14l11-7z");
}
</style><path class="w-5e-6bny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-play-arrow"} {...others} />);
}

export default Component;
