import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rh2140hgr {
  d: path("M13.75 2.75h-9v18.5h14.5v-13Z");
}

.un44b8bad {
  d: path("M13.75 2.75v5.5h5.5m-10.5 3.5v-.5h6.5v.5m-3.25-.5v7m-1.25 0h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rh2140hgr"/><path class="un44b8bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:font-sharp"} {...others} />);
}

export default Component;
