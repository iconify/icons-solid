import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bezamyyhk {
  d: path("M2.5 21.5H14l6-4a1.75 1.75 0 0 0-2-2.75M9.5 8L15 6.25");
}

.susfbv5dg {
  d: path("M5 9.5c2.5-6 10-7 14.5-4.5C17 11 9.5 12 5 9.5Zm-2.5 4.75h4c2 0 3.5 1 5 1H14a1.75 1.75 0 0 1 0 3.5h-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="susfbv5dg"/><path class="bezamyyhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:interception"} {...others} />);
}

export default Component;
