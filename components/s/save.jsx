import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o3r9abcnj {
  d: path("M7.75 20.25v-4.5a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v4.5m-8-16.5v3a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-3");
}

.xcems659q {
  d: path("M3.75 6.25a2.5 2.5 0 0 1 2.5-2.5h10.1a2 2 0 0 1 1.4.6l2.3 2.3a2 2 0 0 1 .6 1.4v9.7a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5Z");
}
</style><g class="hntgybcog"><path class="xcems659q"/><path class="o3r9abcnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:save"} {...others} />);
}

export default Component;
