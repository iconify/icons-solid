import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-2-i017w {
  cx: 12px;
  cy: 12px;
  r: 2.75px;
}

.n04bfsdpz {
  d: path("M12 12C5.21.92 18.79.92 12 12Zm0 0c13-.34 6.2 11.43 0 0Zm0 0c-6.2 11.43-13-.34 0 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="n04bfsdpz"/><circle class="e-2-i017w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ship-propeller-sharp"} {...others} />);
}

export default Component;
