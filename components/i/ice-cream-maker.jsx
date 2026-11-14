import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v93yyvrno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 15.5h12.5A2.75 2.75 0 0 1 21 18.25A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25a2.75 2.75 0 0 1 2.75-2.75m.75 0V6h11v9.5M5 6h14m-8.5-3h3M12 3v3m0 12.25h.01");
}
</style><path class="v93yyvrno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ice-cream-maker"} {...others} />);
}

export default Component;
