import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzeofy8dn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.337 7.024l1.714-2A1.5 1.5 0 0 1 6.19 4.5h11.62a1.5 1.5 0 0 1 1.139.524l1.714 2a1.5 1.5 0 0 1 0 1.952l-1.714 2a1.5 1.5 0 0 1-1.139.524H6.19a1.5 1.5 0 0 1-1.139-.524l-1.714-2a1.5 1.5 0 0 1 0-1.952M12 11.5v10m0-19v2");
}
</style><path class="fzeofy8dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:farm-sign"} {...others} />);
}

export default Component;
