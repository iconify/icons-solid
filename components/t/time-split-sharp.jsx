import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8wdkzbot {
  d: path("M12 6.5a5.5 5.5 0 0 1 0 11Zm0 5.5H8.25M12 12L9.5 8.5");
}

.hwsal5q-o {
  cx: 12px;
  cy: 12px;
  r: 8px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="hwsal5q-o"/><path class="g8wdkzbot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:time-split-sharp"} {...others} />);
}

export default Component;
