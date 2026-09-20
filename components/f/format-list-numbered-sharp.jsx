import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u1j0_db5w {
  fill: currentColor;
  d: path("M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h4v2.25L6 19l1 .75V22zm0-7v-3.75h2.5v-.75H3V9h4v3.75H4.5v.75H7V15zm1.5-7V3.5H3V2h3v6zM9 19v-2h12v2zm0-6v-2h12v2zm0-6V5h12v2z");
}
</style><path class="u1j0_db5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-list-numbered-sharp"} {...others} />);
}

export default Component;
