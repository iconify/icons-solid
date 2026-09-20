import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awvu8k_zt {
  fill: var(--svg-color--30bf54, #30bf54);
  d: path("M3 3a9 9 0 0 1 9 9a9 9 0 0 1-9-9m18 18a9 9 0 0 1-9-9a9 9 0 0 1 9 9m-9-9a4.5 4.5 0 0 1 4.5-4.5A4.5 4.5 0 0 1 12 12m0 0a4.5 4.5 0 0 1-4.5 4.5A4.5 4.5 0 0 1 12 12");
}
</style><path class="awvu8k_zt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:mint"} {...others} />);
}

export default Component;
