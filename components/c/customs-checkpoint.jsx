import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1t2b2bct {
  d: path("m6.625 10.984l11.258-6.5l1.75 3.032l-11.258 6.5Zm3.897-2.25l1.75 3.032m1.931-5.157l1.75 3.032M14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh2nk2bag {
  d: path("M3.5 10h4v11h-4Z");
}
</style><g class="ulnmmdpxh"><path class="yh2nk2bag"/><path class="a1t2b2bct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:customs-checkpoint"} {...others} />);
}

export default Component;
