import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2wfuf_9d {
  fill: currentColor;
  d: path("M10.5 17.5v-1h5v1zm-4.45-.192L1.08 12.34l.714-.715l4.256 4.256l9.155-9.156l.714.714zM14.5 13.5v-1h5v1zm4-4v-1h5v1z");
}
</style><path class="d2wfuf_9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sweep"} {...others} />);
}

export default Component;
