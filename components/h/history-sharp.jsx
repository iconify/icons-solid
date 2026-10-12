import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.drbi0rnnl {
  d: path("M3.75 12a8.25 8.25 0 1 0 2.42-5.83L3.75 8.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yk-a6006u {
  d: path("M3.75 3.75v4.5h4.5m3.75-.5V12l3 1.75");
}
</style><g class="x2cwu0gfd"><path class="drbi0rnnl"/><path class="yk-a6006u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:history-sharp"} {...others} />);
}

export default Component;
