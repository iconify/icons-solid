import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t6sla38dm {
  fill: currentColor;
  d: path("M2 21v-9h7q0 1.25.875 2.125T12 15t2.125-.875T15 12h7v9zm15.6-10.2l-1.4-1.4l3.55-3.55l1.4 1.4zm-11.2 0L2.85 7.25l1.4-1.4L7.8 9.4zM11 8V3h2v5z");
}
</style><path class="t6sla38dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:upcoming-sharp"} {...others} />);
}

export default Component;
