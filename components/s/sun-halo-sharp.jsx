import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cpn2b2b2g {
  d: path("M19 12h2.25m-4.3 4.95l1.59 1.59M12 19v2.25m-4.95-4.3l-1.59 1.59M5 12H2.75m4.3-4.95L5.46 5.46M12 5V2.75m4.95 4.3l1.59-1.59");
}

.qy4e2ebar {
  cx: 12px;
  cy: 12px;
  r: 4.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="qy4e2ebar"/><path class="cpn2b2b2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sun-halo-sharp"} {...others} />);
}

export default Component;
