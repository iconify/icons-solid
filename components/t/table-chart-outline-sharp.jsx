import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jlftzkbos {
  fill: currentColor;
  d: path("M3 21V3h18v18zM5 8h14V5H5zm0 11h2.5v-9H5zm11.5 0H19v-9h-2.5zm-7 0h5v-9h-5z");
}
</style><path class="jlftzkbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-chart-outline-sharp"} {...others} />);
}

export default Component;
