import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e2rc6ibxb {
  d: path("M5 20.5C6.75 20.5 6.75 8 7.75 8s1 12.5 2.75 12.5c1.5 0 1.5-7 2.5-7s1 7 2.5 7s1.5-16 2.5-16s1 16 2.75 16");
}

.fffd9ib1u {
  d: path("M3 3v17.5h18.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fffd9ib1u"/><path class="e2rc6ibxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chromatogram"} {...others} />);
}

export default Component;
