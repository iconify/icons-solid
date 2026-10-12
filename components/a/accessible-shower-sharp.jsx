import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c57dijbcm {
  d: path("M9.5 9.5a3.75 3.75 0 0 1 7.5 0Zm.25 3V14m3.5-1.5V14m3.5-1.5V14");
}

.nl7qlzb0s {
  d: path("M4.75 21.25V2.75h8.5v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nl7qlzb0s"/><path class="c57dijbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:accessible-shower-sharp"} {...others} />);
}

export default Component;
