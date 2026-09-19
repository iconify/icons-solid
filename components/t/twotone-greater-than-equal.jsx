import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gyj9v_mhe {
  fill: currentColor;
  d: path("M18 20.998H6v-2h12z");
}

.j6tc2ab-f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.5 15.5l8.25-5.5L6.5 4.5l1-1.5L18 10L7.5 17z");
}
</style><path class="j6tc2ab-f"/><path class="gyj9v_mhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-greater-than-equal"} {...others} />);
}

export default Component;
