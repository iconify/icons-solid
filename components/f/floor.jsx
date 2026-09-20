import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s1re1x9eu {
  fill: var(--svg-color--00f3d5, #00f3d5);
  d: path("M3 10.941h18v2.118H3z");
}
</style><path class="s1re1x9eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:floor"} {...others} />);
}

export default Component;
