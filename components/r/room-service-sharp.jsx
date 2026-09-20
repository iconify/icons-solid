import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xwf5mky7o {
  fill: currentColor;
  d: path("M2 19v-2h20v2zm1-3v-1q0-3.2 1.963-5.65T10 6.25V4h4v2.25q3.1.65 5.05 3.1T21 15v1z");
}
</style><path class="xwf5mky7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:room-service-sharp"} {...others} />);
}

export default Component;
