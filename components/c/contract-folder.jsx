import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hlie_gb9s {
  d: path("M2.5 10a2 2 0 0 1 2-2h2l2 2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Zm13.25-7.5v3.75h3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ownep8bqj {
  d: path("M11.25 10V2.5h4.5l3.75 3.75V10");
}
</style><g class="hntgybcog"><path class="ownep8bqj"/><path class="hlie_gb9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:contract-folder"} {...others} />);
}

export default Component;
