import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hodjzcbue {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-2 16H5V5h14z");
}
</style><path class="hodjzcbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-crop-din"} {...others} />);
}

export default Component;
