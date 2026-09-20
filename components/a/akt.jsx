import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.h9tt6oepv {
  fill: var(--svg-color--db4533, #db4533);
  d: path("m8.5 4.25l9.515 15.5L21 14.564L14.47 4.25z");
}

.p66qkllvz {
  fill: var(--svg-color--db4533, #db4533);
  d: path("M6.15 9.25L3 14.5l3.15 5.25l6.35-10.5z");
}

.q2b14pblk {
  fill: var(--svg-color--a12e2a, #a12e2a);
  d: path("m9 14.749l3 5h6l-3-5z");
}
</style><g class="ft5dv1b6b"><path class="h9tt6oepv"/><path class="q2b14pblk"/><path class="p66qkllvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:akt"} {...others} />);
}

export default Component;
