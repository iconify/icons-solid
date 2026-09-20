import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q_13vzbri {
  fill: currentColor;
  d: path("M3.942 22v-2.366h16.116V22zM3 17.25V6.75h18v10.5zm7.327-2.634L14.673 12l-4.346-2.615zM3.942 4.366V2h16.116v2.366z");
}
</style><path class="q_13vzbri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:video-template-sharp"} {...others} />);
}

export default Component;
