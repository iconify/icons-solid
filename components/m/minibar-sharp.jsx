import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dt7gqnbzc {
  d: path("M7.75 7.25h3v4.5h-3zm1.5 0v-1.5m4.5 3h3v3h-3zm1.5 0v-1.5m-11 7.5h15.5m-3 2.5v1.5");
}

.mqkg9kykg {
  d: path("M4.25 2.75h15.5v18.5H4.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mqkg9kykg"/><path class="dt7gqnbzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:minibar-sharp"} {...others} />);
}

export default Component;
