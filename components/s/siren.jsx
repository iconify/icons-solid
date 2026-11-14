import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i09avnb_o {
  d: path("M9.5 13a2.5 2.5 0 0 1 2.5-2.5m0-8v2M3.5 6L5 7.5M20.5 6L19 7.5");
}

.n-o48ubkn {
  d: path("M6.5 17.5V13a5.5 5.5 0 0 1 11 0v4.5M4 17.5h16V21H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n-o48ubkn"/><path class="i09avnb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:siren"} {...others} />);
}

export default Component;
