import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gv2owr6mz {
  d: path("m9 16l3-8l3 8m-4.75-2.75h3.5");
}

.h03djckqv {
  d: path("M17.5 5.5a8.5 8.5 0 1 1-11 0m-3-.25l3 .25l-.25 3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h03djckqv"/><path class="gv2owr6mz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:auto-start-stop-sharp"} {...others} />);
}

export default Component;
