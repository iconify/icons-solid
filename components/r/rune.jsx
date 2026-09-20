import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1zkku_qb {
  stop-color: var(--svg-color--0cf, #0cf);
}

.ft5dv1b6b {
  fill: none;
}

.s6e45k5td {
  stop-color: var(--svg-color--3f9, #3f9);
}

.w9bndx17p {
  d: path("m4.125 21l12.612-5.292l-3.99-4.033zM8.757 7.647l3.99 4.028L19.876 3z");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGJCyV8dcN)" class="w9bndx17p"/><defs><linearGradient id="SVGJCyV8dcN" x1="19.875" x2="4.125" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop class="s6e45k5td"/><stop offset="1" class="a1zkku_qb"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:rune"} {...others} />);
}

export default Component;
