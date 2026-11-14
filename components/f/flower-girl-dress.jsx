import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k6g95absz {
  d: path("M8.5 3q3.5 3 7 0q.25 3.75 2.25 5L17 11l3.5 10h-17L7 11l-.75-3q2-1.25 2.25-5Z");
}

.o6qniueau {
  d: path("M11.5 10.5a1 1 0 1 1 1 0a1 1 0 1 1 0 1a1 1 0 1 1-1 0a1 1 0 1 1 0-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k6g95absz"/><path class="o6qniueau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flower-girl-dress"} {...others} />);
}

export default Component;
