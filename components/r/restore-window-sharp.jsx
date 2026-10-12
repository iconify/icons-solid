import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.la8whubsv {
  d: path("M2.75 8.25h13v12h-13zm.75 3.5H15");
}

.u-jzcpbzy {
  d: path("M7.5 8.25v-4.5h13.75v12.5h-5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="la8whubsv"/><path class="u-jzcpbzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:restore-window-sharp"} {...others} />);
}

export default Component;
