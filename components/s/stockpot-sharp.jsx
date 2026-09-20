import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tad0vib8r {
  fill: currentColor;
  d: path("M4 19V7.98h16V19zM4 6.596v-1h5.5V4h5v1.596H20v1z");
}
</style><path class="tad0vib8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stockpot-sharp"} {...others} />);
}

export default Component;
