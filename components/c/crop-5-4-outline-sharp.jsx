import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uymqj-bpz {
  fill: currentColor;
  d: path("M3 20V4h18v16zm2-2h14V6H5zm0 0V6z");
}
</style><path class="uymqj-bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-5-4-outline-sharp"} {...others} />);
}

export default Component;
