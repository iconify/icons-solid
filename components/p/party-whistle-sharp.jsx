import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k64s9jhhq {
  d: path("M2.75 10.25h4.5v3.5h-4.5zm5.25.5h8v2.5H8z");
}

.p3mql2b-b {
  d: path("M16 12h2.25a3 3 0 0 1 0 6h-3v-3h2.25M9 6.25l1-1.5m3 1v-2m3.5 2.5l1-1.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k64s9jhhq"/><path class="p3mql2b-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:party-whistle-sharp"} {...others} />);
}

export default Component;
