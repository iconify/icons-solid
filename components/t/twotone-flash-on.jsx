import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ou4baab9p {
  fill: currentColor;
  d: path("M17 10h-4l3-8H7v11h3v9z");
}
</style><path class="ou4baab9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-flash-on"} {...others} />);
}

export default Component;
