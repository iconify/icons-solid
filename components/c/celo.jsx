import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k53vtabkp {
  fill: var(--svg-color--fcfe52, #fcfe52);
  d: path("M3 3h18v6.429h-3.111a6.428 6.428 0 1 0 0 5.143H21V21H3z");
}
</style><path class="k53vtabkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:celo"} {...others} />);
}

export default Component;
