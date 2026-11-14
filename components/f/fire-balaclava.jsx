import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mg8e5098m {
  d: path("M8.75 10a3.25 2.5 0 1 0 6.5 0a3.25 2.5 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.up-g2acgg {
  d: path("M12 2.5c4 0 6 3 6 7V13c0 2-1 3-2 3.5l4 1.5c1 .5 1.5 1.5 1.5 3.5h-19c0-2 .5-3 1.5-3.5l4-1.5C7 16 6 15 6 13V9.5c0-4 2-7 6-7Z");
}
</style><g class="ulnmmdpxh"><path class="up-g2acgg"/><path class="mg8e5098m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fire-balaclava"} {...others} />);
}

export default Component;
