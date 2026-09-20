import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vxwcvub0d {
  fill: currentColor;
  d: path("M3 20V4h18v16zm9-1h8V5h-8zm-2-7.5v-1H5v1zm6-3.73q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23m-6-.27v-1H5v1z");
}
</style><path class="vxwcvub0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:pixel-9-pro-fold-sharp"} {...others} />);
}

export default Component;
