import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.egkr7d65p {
  d: path("M17 8.54a4 4 0 0 1 0 6.92");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nhqzfzb7u {
  d: path("M18.5 5.94a7 7 0 0 1 0 12.12");
}

.wgofw5b0q {
  d: path("M3 9h5l5 -5v16l-5 -5H3Z");
}
</style><g class="hntgybcog"><path class="wgofw5b0q"/><path class="egkr7d65p"/><path class="nhqzfzb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:volume-up-outline-thin"} {...others} />);
}

export default Component;
