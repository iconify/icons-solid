import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qfi75vctp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.26 11h13.48l-.67 9H5.93zm3.76-7h5.95L19 7.38l1.59-1.59L22 7.21L19.21 10H4.79L2 7.21L3.41 5.8L5 7.38z");
}
</style><path class="qfi75vctp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-takeout-dining"} {...others} />);
}

export default Component;
