import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s44sldphn {
  fill: currentColor;
  d: path("M10 21V2.975l7-3.05V3h5v18zm4.675-2H20V5h-3v13.025zM2 5V3h2v2zm0 16v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm4-4V3h2v2zm0 16v-2h2v2z");
}
</style><path class="s44sldphn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:devices-fold-sharp"} {...others} />);
}

export default Component;
