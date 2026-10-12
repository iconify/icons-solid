import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sd6wdsdpf {
  cx: 8.75px;
  cy: 14.5px;
  r: 6px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe5njdbqo {
  d: path("M2.95 16h11.6M13 10.25c1.5-4.75 3.75-6.5 5.25-4.5l3 7.25");
}
</style><g class="x2cwu0gfd"><circle class="sd6wdsdpf"/><path class="xe5njdbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:retort-sharp"} {...others} />);
}

export default Component;
