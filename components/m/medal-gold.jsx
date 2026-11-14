import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o-o9zybvr {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.s_fyfrd4p {
  d: path("M8.25 9.75L5 2.5h4.75L12 5.75l2.25-3.25H19l-3.25 7.25M12 11.25l1 2.5h2.5l-2 1.75l.75 2.5L12 16.5L9.75 18l.75-2.5l-2-1.75H11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o-o9zybvr"/><path class="s_fyfrd4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:medal-gold"} {...others} />);
}

export default Component;
