import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l37gi8omx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.75 8.5q0-2.175 1.538-3.712Q9.825 3.25 12 3.25t3.712 1.538Q17.25 6.325 17.25 8.5t-1.538 3.712Q14.175 13.75 12 13.75t-3.712-1.538Q6.75 10.675 6.75 8.5");
}
</style><path class="l37gi8omx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:degree-symbol"} {...others} />);
}

export default Component;
