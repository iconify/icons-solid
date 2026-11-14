import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c08jyg70q {
  d: path("M4.5 4.5C2 4.5 2 8.5 5 9m7.5-4.5c2.5 0 2.5 4-.5 4.5m-3.5 2v3m-3 0h6l1.5 4H4Zm10.25 2a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.gwmxq3oun {
  d: path("M4.5 3h8v4a4 4 0 0 1-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgctqub2s {
  d: path("M18 16a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="gwmxq3oun"/><path class="c08jyg70q"/><path class="zgctqub2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:performance-bonus"} {...others} />);
}

export default Component;
