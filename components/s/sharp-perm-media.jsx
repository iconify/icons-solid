import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kcy8u1b1k {
  fill: currentColor;
  d: path("M2 6H0v16h20v-2H2zm22-2H14l-2-2H4v16h20zM7 15l4.5-6l3.5 4.51l2.5-3.01L21 15z");
}
</style><path class="kcy8u1b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-perm-media"} {...others} />);
}

export default Component;
