import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dv6nr2buu {
  fill: currentColor;
  d: path("M6 12h12v3H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.pnw571vpp {
  fill: currentColor;
  d: path("M18 10V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5c0-1.1-.9-2-2-2m-5-3h3v3h-3zM8 7h3v3H8zm10 8H6v-3h12z");
}
</style><path class="dv6nr2buu"/><path class="pnw571vpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-single-bed"} {...others} />);
}

export default Component;
