import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vrskicb2r {
  fill: currentColor;
  d: path("M11.2 20q.4-.675.6-1.437T12 17q0-2.5-1.75-4.25T6 11q-1.125 0-2.15.4T2 12.525V4h14l6 8l-6 8zM5 21v-3H2v-2h3v-3h2v3h3v2H7v3z");
}
</style><path class="vrskicb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:new-label-sharp"} {...others} />);
}

export default Component;
