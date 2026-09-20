import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.es6tr8bpa {
  fill: var(--svg-color--fff, #fff);
  d: path("M3 6.6h8.55v1.35H3zm3.6 2.25h1.35v8.55H6.6zm5.85-2.25H21v1.35h-8.55zm3.6 2.25h1.35v8.55h-1.35z");
}
</style><path class="es6tr8bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:traxx"} {...others} />);
}

export default Component;
