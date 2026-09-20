import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.clczc7bxp {
  fill: currentColor;
  d: path("M10.75 19.25v-5.065l-4.4 2.542q-.452.254-.95.117t-.752-.594q-.254-.452-.127-.95t.579-.752L9.5 12L5.1 9.477q-.452-.254-.579-.755q-.127-.5.127-.953t.762-.588q.507-.137.96.117l4.38 2.543V4.75q0-.513.368-.882T12 3.5t.882.368t.368.882v5.09l4.4-2.542q.452-.254.95-.117t.752.588t.124.953t-.582.755L14.5 12l4.4 2.548q.452.254.579.752t-.127.956q-.254.452-.762.588q-.507.137-.96-.117l-4.38-2.543v5.066q0 .514-.368.882T12 20.5t-.882-.368t-.368-.882");
}
</style><path class="clczc7bxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:emergency-outline-rounded"} {...others} />);
}

export default Component;
