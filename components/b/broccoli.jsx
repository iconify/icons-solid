import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.da9n995-z {
  d: path("M7 13a3.25 3.25 0 0 1-.6-6.45a4 4 0 0 1 5.6-2.3a4 4 0 0 1 5.6 2.3A3.25 3.25 0 0 1 17 13Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t3kivm2nf {
  d: path("M10.25 13h3.5l.6 7.15a1 1 0 0 1-1 1.1h-2.7a1 1 0 0 1-1-1.1Zm-.75-2.75a2 2 0 0 1 2.5-1.5");
}
</style><g class="hntgybcog"><path class="da9n995-z"/><path class="t3kivm2nf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:broccoli"} {...others} />);
}

export default Component;
