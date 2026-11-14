import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j4t8ffbtw {
  d: path("M3.5 14a8.5 4.5 0 0 0 17 0M8 7a4 1.75 0 1 0 8 0a4 1.75 0 1 0-8 0Z");
}

.jyzkirbsd {
  d: path("M3.5 11a8.5 4.5 0 0 0 17 0");
}

.m-40vldch {
  d: path("M3.5 7a8.5 4.5 0 1 0 17 0a8.5 4.5 0 1 0-17 0Z");
}

.nmdu7wxtz {
  d: path("M3.5 7v10a8.5 4.5 0 0 0 17 0V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m-40vldch"/><path class="nmdu7wxtz"/><path class="jyzkirbsd"/><path class="j4t8ffbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:casino"} {...others} />);
}

export default Component;
