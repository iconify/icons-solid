import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.te6-7kbww {
  d: path("M3 8.5h18V21H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x8vm4mb1d {
  d: path("M6 11.5h9V18H6Zm0 3.25h9m3 0h.01m-8.01-9c-1-1 1-2.25 0-3.25m4 3.25c-1-1 1-2.25 0-3.25");
}
</style><g class="ulnmmdpxh"><path class="te6-7kbww"/><path class="x8vm4mb1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:incubator-lab"} {...others} />);
}

export default Component;
