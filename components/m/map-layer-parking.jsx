import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c75kdi4tf {
  d: path("M7.5 11L9 7h6l1.5 4M6 11h12v6H6Zm2.75 3h.01m6.49 0h.01");
}

.j0h368bpl {
  d: path("M3 3v18h18V3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j0h368bpl"/><path class="c75kdi4tf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:map-layer-parking"} {...others} />);
}

export default Component;
