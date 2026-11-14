import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8hbdqbky {
  d: path("M6.5 11a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.pqf31jbuh {
  d: path("M9.344 10.288a2.75 2.75 0 0 1 1.944-1.944");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbq0bwb-m {
  d: path("m3 9l1.5 11h15L21 9");
}
</style><g class="ulnmmdpxh"><path class="wbq0bwb-m"/><path class="h8hbdqbky"/><path class="pqf31jbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ice-sphere"} {...others} />);
}

export default Component;
