import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.agzwz9bjo {
  d: path("M7 12c2.5 2.25 7 2.25 10-1");
}

.j-hptyjow {
  d: path("M8 18c-3.5-1.5-5-5-4.5-8.5c.5-2.5 2-4 4-4c1 0 1.5 1 2 2c1-3.5 3.5-4.5 6-4.25c3.5.25 5 3.75 5 7.75c0 3.5-2 6-4.5 7Zm0 0l-1.5 3.5h11L16 18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j-hptyjow"/><path class="agzwz9bjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:goalie-catcher"} {...others} />);
}

export default Component;
