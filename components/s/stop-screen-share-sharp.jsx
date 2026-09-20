import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n_z4amb_e {
  fill: currentColor;
  d: path("M20.5 23.3L18.2 21H1v-2h15.175l-1-1H2V4.85L.7 3.5l1.4-1.4l19.8 19.8zM10 12.85L8.175 11q-.125.225-.15.475T8 12v2h2zm10.7 5l-6.275-6.275L16 10l-3-3v2h-1.15l-6-6H22v14.85z");
}
</style><path class="n_z4amb_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stop-screen-share-sharp"} {...others} />);
}

export default Component;
