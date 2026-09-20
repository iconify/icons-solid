import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.ih8igackk {
  fill: var(--svg-color--02a5c2, #02a5c2);
  d: path("M7.737 7.973V4.184H21v3.79z");
}

.shojkc1ho {
  fill: var(--svg-color--5fcade, #5fcade);
  d: path("M7.737 13.656v-3.79h9.473v3.79zm-4.737 0v-3.79h3.79v3.79z");
}

.z4gje-kcl {
  fill: var(--svg-color--abebf4, #abebf4);
  d: path("M7.737 19.816v-3.79H12v3.79z");
}
</style><g class="ft5dv1b6b"><path class="ih8igackk"/><path class="shojkc1ho"/><path class="z4gje-kcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:defi"} {...others} />);
}

export default Component;
