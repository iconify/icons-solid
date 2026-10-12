import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fha6990wp {
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.ts9qrvbbx {
  d: path("M5.5 8.75h3v2.5h-3zm5 4h3v2.5h-3zm5-3.5h3v2.5h-3zM7 7v1.75m0 2.5V17m5-10v5.75m0 2.5V17m5-10v2.25m0 2.5V17");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="ts9qrvbbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sound-mixer-sharp"} {...others} />);
}

export default Component;
