import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cwcb6qb0j {
  d: path("M2.5 16h16.25a2.75 2.75 0 0 0 0-5.5H12l-3.5-8h-6Zm7.5 0l-2.5 4.5h2.75l4-4.5");
}

.hm15quftp {
  d: path("M6.5 4.75L5 7.25h2.75L6.25 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cwcb6qb0j"/><path class="hm15quftp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:electric-plane"} {...others} />);
}

export default Component;
