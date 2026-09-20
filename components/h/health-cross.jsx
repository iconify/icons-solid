import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l0jl5lbej {
  fill: currentColor;
  d: path("M8 21v-5H3V8h5V3h8v5h5v8h-5v5z");
}
</style><path class="l0jl5lbej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:health-cross"} {...others} />);
}

export default Component;
