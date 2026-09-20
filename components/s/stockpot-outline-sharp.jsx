import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ic-heh8qg {
  fill: currentColor;
  d: path("M4 19V7.98h16V19zm1-1h14V8.98H5zM4 6.596v-1h5.5V4h5v1.596H20v1zm8 6.885");
}
</style><path class="ic-heh8qg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stockpot-outline-sharp"} {...others} />);
}

export default Component;
