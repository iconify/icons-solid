import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lf0-q8pda {
  d: path("M8.5 9.25v-1h7v2.5h-1.25v2.5h1.25v2.5h-7v-2.5h1.25v-2.5H8.5Z");
}

.q2q1hgbdq {
  d: path("M5.75 2.75h12.5v18.5H5.75zm5 2.75h2.5m-2.75 13h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="q2q1hgbdq"/><path class="lf0-q8pda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mobile-ticket-sharp"} {...others} />);
}

export default Component;
