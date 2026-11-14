import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-xti72pq {
  d: path("M3 4.5h18V21H3Zm5-2v4m8-4v4m-13 3h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwegp-bsc {
  d: path("M13 13h4.5v4.5H13Z");
}
</style><g class="ulnmmdpxh"><path class="e-xti72pq"/><path class="zwegp-bsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sports-calendar"} {...others} />);
}

export default Component;
