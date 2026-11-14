import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xd28h_bnx {
  d: path("M8.75 10.25a4.5 4.5 0 1 1 6.5 0a6 6 0 1 1-6.5 0Z");
}

.yvsimyazh {
  d: path("M10 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.5 4.75h5");
}
</style><g class="ulnmmdpxh"><path class="xd28h_bnx"/><path class="yvsimyazh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:guitar-body"} {...others} />);
}

export default Component;
