import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kvzglcbbh {
  fill: currentColor;
  d: path("M4.615 20V4h6v3.312q-1.557.465-2.529 1.763q-.97 1.298-.97 2.925t.97 2.925t2.53 1.764V20zm8.77 0v-3.311q1.557-.466 2.529-1.764q.97-1.298.97-2.925t-.97-2.925t-2.53-1.764V4h6v16zM11.5 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="kvzglcbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:combine-columns-sharp"} {...others} />);
}

export default Component;
