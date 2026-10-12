import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hjj7v0b2m {
  d: path("M6.25 4.75h11.5v16.5H6.25z");
}

.uup39gbiz {
  d: path("M8.25 7.5a8 8 0 0 0 7.5 0m-7 4.5h6.5m-6.5 3h6.5m-6.5 3h6.5m4-15.25l1.789.619l.211 1.881");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hjj7v0b2m"/><path class="uup39gbiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:smart-speaker-off-sharp"} {...others} />);
}

export default Component;
