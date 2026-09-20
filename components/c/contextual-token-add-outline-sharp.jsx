import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ou_4i3d3n {
  fill: currentColor;
  d: path("M2 20V4h12v2H4v12h16v-7h2v9zm4-4h7v-3H6zm0-5h7V8H6zm9 5h3v-5h-3zM4 18V6zm14-9V7h-2V5h2V3h2v2h2v2h-2v2z");
}
</style><path class="ou_4i3d3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:contextual-token-add-outline-sharp"} {...others} />);
}

export default Component;
