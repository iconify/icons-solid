import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8hbdqbky {
  d: path("M6.5 11a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xemh9nb-o {
  d: path("M10.25 16.25v5.25h3.5v-5.25");
}

.zn_c5lflo {
  d: path("M5 2.5h14v3H5Z");
}
</style><g class="ulnmmdpxh"><path class="zn_c5lflo"/><path class="h8hbdqbky"/><path class="xemh9nb-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ball-head"} {...others} />);
}

export default Component;
