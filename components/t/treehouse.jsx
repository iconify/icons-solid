import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.prmv6_0xb {
  d: path("M11 14v-3h2v3m-.25 0v7.5m3-7.5v7.5m-3-4.75h3m-3 2.5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7qsuq7rf {
  d: path("M7.5 9L12 4.5L16.5 9v5h-9Zm-2 5h13m-9 0v7.5M6 14L3 9m15 5l3-5");
}
</style><g class="ulnmmdpxh"><path class="v7qsuq7rf"/><path class="prmv6_0xb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:treehouse"} {...others} />);
}

export default Component;
