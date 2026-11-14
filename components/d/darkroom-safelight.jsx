import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fei8yg9-b {
  d: path("M7.75 5.75h8.5v4.5h-8.5ZM12 16v5m-4.5-5.5l-2 4m11-4l2 4");
}

.lcs5lo0kt {
  d: path("M5 3h14v10H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lcs5lo0kt"/><path class="fei8yg9-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:darkroom-safelight"} {...others} />);
}

export default Component;
