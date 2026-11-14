import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.am9epkb1t {
  d: path("m7 7l3.5 3.5L7 14m9.5 2.5h5v5h-5ZM13.75 19v-4.25a1 1 0 0 1 1-1H19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wp9cxo7ji {
  d: path("M10.9 21H3V2.5h14.5v8.4");
}
</style><g class="ulnmmdpxh"><path class="wp9cxo7ji"/><path class="am9epkb1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:command-copy"} {...others} />);
}

export default Component;
