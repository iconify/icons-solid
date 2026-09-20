import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ldnwg1bsy {
  fill: currentColor;
  d: path("M3 21V2h2v2h14V2h2v19h-2V10H5v11zm8 0v-3H8v-2h8v2h-3v3z");
}
</style><path class="ldnwg1bsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pergola-sharp"} {...others} />);
}

export default Component;
