import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rta4fyaty {
  fill: var(--svg-color--ea6e25, #ea6e25);
  d: path("M15.706 21h-2.393L12 5.758L10.687 21H8.294l2.17-18h3.077z");
}
</style><path class="rta4fyaty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ath"} {...others} />);
}

export default Component;
