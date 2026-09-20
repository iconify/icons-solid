import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mpca__bpq {
  fill: currentColor;
  d: path("M10 20v-7L2.95 4h18.1L14 13v7z");
}
</style><path class="mpca__bpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-alt-sharp"} {...others} />);
}

export default Component;
