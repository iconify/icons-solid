import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ge7firbfo {
  d: path("M8 9.5L6.75 8.25L8 7l1.25-1.25L8 4.5m4 5l-1.25-1.25L12 7l1.25-1.25L12 4.5m4 5l-1.25-1.25L16 7l1.25-1.25L16 4.5");
}

.mvgpweb4f {
  d: path("M2.75 12.5h18.5v8.75H2.75z");
}

.ts6ik8buj {
  cx: 12px;
  cy: 16.875px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mvgpweb4f"/><circle class="ts6ik8buj"/><path class="ge7firbfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:geothermal-sharp"} {...others} />);
}

export default Component;
