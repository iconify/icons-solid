import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gt9_8_ujb {
  fill: var(--svg-color--1b14dc, #1b14dc);
  d: path("M11.5 18V3l-6 3.55V18zm7-12h-6v15l6-3.55z");
}
</style><path class="gt9_8_ujb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:idle"} {...others} />);
}

export default Component;
