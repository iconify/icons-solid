import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.azlmfgbpz {
  d: path("M2.5 11L12 3.5l9.5 7.5");
}

.oehlwebhe {
  d: path("M15.5 6.25V3H18v5.25M5 9v11.5M19 9v11.5m-17 0h20M10 14h4v6.5h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="azlmfgbpz"/><path class="oehlwebhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mine-camp"} {...others} />);
}

export default Component;
