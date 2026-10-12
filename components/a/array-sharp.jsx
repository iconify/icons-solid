import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fs5wvk5xm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 12h.01M12 12h.01m4.49 0h.01");
}

.ift9ttesz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3.75h-3v16.5h3m10.5-16.5h3v16.5h-3");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="ift9ttesz"/><path class="fs5wvk5xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:array-sharp"} {...others} />);
}

export default Component;
