import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r8cs0naer {
  fill: currentColor;
  d: path("M21 7H3v10h18zm-2 8H5V9h14z");
}
</style><path class="r8cs0naer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-crop-16-9"} {...others} />);
}

export default Component;
