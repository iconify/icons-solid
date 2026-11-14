import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lr3diyl9p {
  d: path("m6.5 8.5l5 3.5l5-3.5m-1.25 13v-3m2.75 3v-7m2.75 7V17");
}

.t8elgr-wh {
  d: path("M12.4 18.5H2.5v-14h18v7.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t8elgr-wh"/><path class="lr3diyl9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:email-analytics"} {...others} />);
}

export default Component;
