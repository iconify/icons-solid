import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sxndxzbac {
  fill: currentColor;
  d: path("M21 10V5H3v5H2v9h2v-2h16v2h2v-9zm-8-3h6v3h-6zm-8 3V7h6v3zm-1 5v-3h16v3z");
}
</style><path class="sxndxzbac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-bed"} {...others} />);
}

export default Component;
