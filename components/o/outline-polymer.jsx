import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rt79eobkw {
  fill: currentColor;
  d: path("M19 4h-4L7.11 16.63L4.5 12L9 4H5L.5 12L5 20h4l7.89-12.63L19.5 12L15 20h4l4.5-8z");
}
</style><path class="rt79eobkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-polymer"} {...others} />);
}

export default Component;
