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

.uqrvp6bwh {
  d: path("M11.75 12.603a4.5 4.5 0 1 1-4.5 0M9.5 10H14m7.5-7v18");
}

.x52hf1bbn {
  d: path("M7.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 3.5v5.5h6L18 19");
}
</style><g class="ulnmmdpxh"><path class="x52hf1bbn"/><path class="uqrvp6bwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wheelchair-accessible-entrance"} {...others} />);
}

export default Component;
