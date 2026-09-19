import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wu2qubb-z {
  fill: currentColor;
  d: path("M11 3v10H8l4 4l4-4h-3V3zM4 19h16v2H4z");
}
</style><path class="wu2qubb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-vertical-align-bottom"} {...others} />);
}

export default Component;
