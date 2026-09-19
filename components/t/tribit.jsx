import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zyt6voa4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.285 16.982a4.859 4.859 0 1 1 4.208-7.288l13.715 23.755a4.859 4.859 0 1 1-8.416 0L33.507 9.693a4.859 4.859 0 1 1 4.208 7.288z");
}
</style><path class="zyt6voa4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tribit"} {...others} />);
}

export default Component;
