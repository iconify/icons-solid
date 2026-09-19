import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uf-2kvb5q {
  fill: currentColor;
  d: path("M16.83 5L15 3H9L7.17 5H2v16h20V5zM6 17l3-4l2.25 3l3-4L18 17z");
}
</style><path class="uf-2kvb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-photo-camera-back"} {...others} />);
}

export default Component;
