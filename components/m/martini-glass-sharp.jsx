import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kd2wlybli {
  d: path("M4.25 4.25h16.5l-.71.71l-7.33 7.33L12 13l-.71-.71l-7.33-7.33l-.71-.71zM12 13v8.25m-3.75 0h7.5");
}

.odpsdxyup {
  cx: 12px;
  cy: 8.25px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kd2wlybli"/><circle class="odpsdxyup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:martini-glass-sharp"} {...others} />);
}

export default Component;
