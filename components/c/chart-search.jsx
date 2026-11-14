import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5zvu7t3h {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-4.25 12.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm4.5 2l2.25 2.25");
}

.eanni_blz {
  d: path("M3.5 3v17.5h9.6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eanni_blz"/><path class="b5zvu7t3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-search"} {...others} />);
}

export default Component;
