import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.riyerkbte {
  fill: currentColor;
  d: path("M3 12.5v-2h8v2zm9.98 0v-2h8v2z");
}
</style><path class="riyerkbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:unknown-med-sharp"} {...others} />);
}

export default Component;
