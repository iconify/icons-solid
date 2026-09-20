import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_aoecb3c {
  d: path("M21 12.625L16.5 10v4.375L21 17zm-9 0L7.5 10v4.375L12 17z");
}

.fcsbzobap {
  stop-color: var(--svg-color--1b6cf5, #1b6cf5);
}

.ft5dv1b6b {
  fill: none;
}

.i9z1hs3rl {
  fill: var(--svg-color--fab508, #fab508);
  d: path("M12 11L8.5 9.02L12 7l3.5 2.02z");
}

.u30b8cc4k {
  stop-color: var(--svg-color--1b48f5, #1b48f5);
}

.uvtjf3-ig {
  fill: var(--svg-color--b5c7ff, #b5c7ff);
  d: path("M3 12.625L7.5 10v4.375L3 17zm9 0L16.5 10v4.375L12 17z");
}
</style><g class="ft5dv1b6b"><path class="i9z1hs3rl"/><path class="uvtjf3-ig"/><path fill="url(#SVGIEgKzcEq)" class="b_aoecb3c"/><defs><linearGradient id="SVGIEgKzcEq" x1="7.499" x2="20.999" y1="13.5" y2="13.5" gradientUnits="userSpaceOnUse"><stop class="fcsbzobap"/><stop offset="1" class="u30b8cc4k"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:mbox"} {...others} />);
}

export default Component;
