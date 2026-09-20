import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mq1o3xtmm {
  fill: currentColor;
  d: path("m8.85 6l-2-2H21v2zM22 19l-8-7.85V8h8zm-2.2 3.6L17.2 20H14v-3.2l-8-8V17h6v3H2v-3h2V6.8L1.4 4.2l1.4-1.4l18.4 18.4z");
}
</style><path class="mq1o3xtmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:phonelink-off-sharp"} {...others} />);
}

export default Component;
