import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ov2mj1xyl {
  fill: currentColor;
  d: path("m6.598 2.573l.694-.727l9.289 9.289l-6.196 6.254l-6.196-6.273l5.502-5.45zm3.806 3.806L5.59 11.154h9.588zm7.107 10.88q-.434-.434-.434-1.067q0-.448.236-.884t.495-.827q.186-.262.378-.51q.193-.248.391-.51q.198.262.39.51q.193.248.38.51q.259.39.494.827q.236.436.236.884q0 .633-.434 1.067q-.433.433-1.066.433t-1.066-.433M2 24v-2h20v2z");
}
</style><path class="ov2mj1xyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:format-color-fill-outline-sharp"} {...others} />);
}

export default Component;
