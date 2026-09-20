import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xe8g2tbbh {
  fill: currentColor;
  d: path("M232 204h-15.47L157.2 33.43A20 20 0 0 0 138.31 20h-20.62A20 20 0 0 0 98.8 33.43L39.47 204H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24M98.27 108h59.46l13.91 40H84.36Zm22.26-64h14.94l13.91 40h-42.76ZM76 172h104l11.13 32H64.88Z");
}
</style><path class="xe8g2tbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:traffic-cone-bold"} {...others} />);
}

export default Component;
