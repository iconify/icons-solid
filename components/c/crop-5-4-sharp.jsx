import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r6zpstb_t {
  fill: currentColor;
  d: path("M3 20V4h18v16z");
}
</style><path class="r6zpstb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-5-4-sharp"} {...others} />);
}

export default Component;
