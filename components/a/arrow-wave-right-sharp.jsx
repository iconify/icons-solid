import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ni9xukxzf {
  d: path("m17.75 6.5l3 3l-3 3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnxtr0b1z {
  d: path("M2.75 15.5c2 0 2.25-6 4.25-6s2.25 6 4.25 6s2.25-6 4.25-6h5.25");
}
</style><g class="x2cwu0gfd"><path class="xnxtr0b1z"/><path class="ni9xukxzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arrow-wave-right-sharp"} {...others} />);
}

export default Component;
