import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sn8-akv5t {
  fill: currentColor;
  d: path("M5 19H4l-.65-2H2v-5.025q0-.825.588-1.4T4 10V7q0-.825.588-1.412T6 5h12q.825 0 1.413.588T20 7v3q.825 0 1.413.588T22 12v5h-1.35L20 19h-1l-.65-2H5.65zm8-9h5V7h-5zm-7 0h5V7H6z");
}
</style><path class="sn8-akv5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:king-bed"} {...others} />);
}

export default Component;
