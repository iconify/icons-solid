import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ca-u9lpwc {
  fill: currentColor;
  d: path("M13 18h1v-2h-1q-1.25 0-2.125-.875T10 13v-1H8v1q0 2.075 1.463 3.538T13 18m-5.962.963Q5 16.925 5 14q0-1.925.638-3.875t1.65-3.537T9.55 4T12 3q1.225 0 2.463 1t2.25 2.588t1.65 3.537T19 14q0 2.925-2.037 4.963T12 21t-4.962-2.037");
}
</style><path class="ca-u9lpwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:egg-sharp"} {...others} />);
}

export default Component;
