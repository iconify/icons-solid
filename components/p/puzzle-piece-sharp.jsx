import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iza8vibey {
  d: path("M12.5 5H21v14h-8.5v-4.75a2.25 2.25 0 0 0 0-4.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yx-kgjwbn {
  d: path("M5 5h7.5v4.75a2.25 2.25 0 0 1 0 4.5V19H3V5z");
}
</style><g class="x2cwu0gfd"><path class="yx-kgjwbn"/><path class="iza8vibey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:puzzle-piece-sharp"} {...others} />);
}

export default Component;
