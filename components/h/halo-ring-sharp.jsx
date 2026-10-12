import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ivl5k1bso {
  cx: 12px;
  cy: 11px;
  r: 2.75px;
}

.jpa2tta9t {
  d: path("M4.5 21.25c0-3 3.25-5 7.5-5s7.5 2 7.5 5Z");
}

.x0ulejaqb {
  d: path("M12 2.75c3.6 0 6.5.67 6.5 1.5s-2.9 1.5-6.5 1.5s-6.5-.67-6.5-1.5s2.9-1.5 6.5-1.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x0ulejaqb"/><circle class="ivl5k1bso"/><path class="jpa2tta9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:halo-ring-sharp"} {...others} />);
}

export default Component;
