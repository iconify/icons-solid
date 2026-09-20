import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uthnbhb2l {
  fill: currentColor;
  d: path("M4.025 21L.4 17.475l1-1.025q2.175-2.225 4.963-3.337T12 12t5.625 1.113T22.6 16.45l1 1.025L19.975 21L16 18v-3.35q-.95-.3-1.95-.475T12 14t-2.05.175T8 14.65V18zM11 7V2h2v5zm6.6 2.85L16.2 8.4l3.55-3.55l1.4 1.45zm-11.2 0L2.85 6.3l1.4-1.45L7.8 8.4z");
}
</style><path class="uthnbhb2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ring-volume-sharp"} {...others} />);
}

export default Component;
