import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bfn2xyb2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.16 31.74l3.468-15.48m-5.128 0h10.257m14.366 15.48l3.468-15.48h3.484c3.74 0 6.094 3.032 5.256 6.772l-.434 1.935c-.838 3.741-4.55 6.773-8.29 6.773zm-12.692-7.742h7.741");
}
</style><path class="bfn2xyb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:torrents-digger"} {...others} />);
}

export default Component;
