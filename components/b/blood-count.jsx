import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hufo17-ac {
  d: path("M4.25 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6.25-6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6.25 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.tuu9ccg7p {
  d: path("M2.5 2.5h19v19h-19Zm6.25 0v19m6.5-19v19M2.5 8.75h19m-19 6.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tuu9ccg7p"/><path class="hufo17-ac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:blood-count"} {...others} />);
}

export default Component;
