import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w8m5b0y_s {
  d: path("M5.25 6.5h16v11H8.5l-1.89-1.64l-1.97-1.72l-1.89-1.64v-6z");
}

.wqv2yddhi {
  d: path("M13 9h5.75v6H13zM9.75 9v6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="w8m5b0y_s"/><path class="wqv2yddhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:taillight-sharp"} {...others} />);
}

export default Component;
