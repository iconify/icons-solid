import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rn8ol4b-j {
  fill: currentColor;
  d: path("M17.2 3H6.8l-5.2 9l5.2 9h10.4l5.2-9z");
}
</style><path class="rn8ol4b-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-hexagon"} {...others} />);
}

export default Component;
