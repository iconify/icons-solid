import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kmc_dtahx {
  d: path("M13.75 14.5c-1.5-1.25-2.5-2.5-2.5-3.75a2.5 2.5 0 0 1 5 0c0 1.25-1 2.5-2.5 3.75Z");
}

.psizqf3sa {
  d: path("M4.75 2.75h14.5v18.5H4.75zm3.5 0v18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="psizqf3sa"/><path class="kmc_dtahx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:travel-journal-sharp"} {...others} />);
}

export default Component;
