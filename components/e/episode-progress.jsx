import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o219yjbqj {
  d: path("M11.5 11.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0H18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7lqlfb-m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8M6 11.75h5.5");
}
</style><g class="ulnmmdpxh"><path class="x7lqlfb-m"/><path class="o219yjbqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:episode-progress"} {...others} />);
}

export default Component;
