import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bmbk2pjqb {
  fill: currentColor;
  d: path("M22 2v2H2V2zM7 10.5v3h10v-3zM2 20v2h20v-2z");
}
</style><path class="bmbk2pjqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-vertical-distribute"} {...others} />);
}

export default Component;
