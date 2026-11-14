import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aispypb3t {
  d: path("m16.5 13.5l1.5 1.25L16.5 16");
}

.hkzzr0rli {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5M21.25 18A3.25 3.25 0 1 1 18 14.75");
}

.o4c588h0r {
  d: path("M3.5 3v17.5h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o4c588h0r"/><path class="hkzzr0rli"/><path class="aispypb3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-refresh"} {...others} />);
}

export default Component;
