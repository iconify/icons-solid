import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x38s-hs_i {
  fill: currentColor;
  d: path("M5.438 19.563Q5 19.125 5 18.5v-3q0-.625.438-1.062T6.5 14t1.063.438T8 15.5v3q0 .625-.437 1.063T6.5 20t-1.062-.437");
}
</style><path class="x38s-hs_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-alt-1-bar-rounded"} {...others} />);
}

export default Component;
