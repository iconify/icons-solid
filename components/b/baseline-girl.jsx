import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pfl_lb8us {
  fill: currentColor;
  d: path("M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5m2 8.5v4h-4v-4H8l2.38-6.38a1.733 1.733 0 0 1 3.24 0L16 16z");
}
</style><path class="pfl_lb8us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-girl"} {...others} />);
}

export default Component;
