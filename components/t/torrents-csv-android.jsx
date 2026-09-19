import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jx2pxn5bi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.805 37.4c0 2.817-7.076 5.1-15.805 5.1S8.195 40.217 8.195 37.4m0-26.8c0-2.817 7.076-5.1 15.805-5.1s15.805 2.283 15.805 5.1m0 13.285c-1.421 1.368-7.076 3.572-15.805 3.572S9.57 25.298 8.195 23.885m31.61-7.981c-1.421 1.368-7.076 3.572-15.805 3.572S9.57 17.318 8.195 15.904m31.61 15.822c-1.421 1.369-7.076 3.572-15.805 3.572S9.57 33.14 8.195 31.726m0 5.661V10.586m31.61 0v26.801");
}
</style><path class="jx2pxn5bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:torrents-csv-android"} {...others} />);
}

export default Component;
