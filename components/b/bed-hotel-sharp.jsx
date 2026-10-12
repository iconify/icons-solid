import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d9uir3tem {
  d: path("M7.5 6.5h9V9h-9zM2.75 12h18.5v5.5H2.75zm1.75 5.5v3.75m15-3.75v3.75");
}

.mqd_1jbhi {
  d: path("M4.5 12V3.25h15V12");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mqd_1jbhi"/><path class="d9uir3tem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bed-hotel-sharp"} {...others} />);
}

export default Component;
