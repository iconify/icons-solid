import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xu-ew2bqk {
  fill: currentColor;
  d: path("M5 22v-6h2v-5H5V5h5V4H9V2h6v2h-1v1h5v6h-2v5h2v6z");
}
</style><path class="xu-ew2bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:water-bottle-large-sharp"} {...others} />);
}

export default Component;
