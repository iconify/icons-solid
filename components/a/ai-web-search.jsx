import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qkii7vicd {
  d: path("M7.5 10.5a3 7 0 1 0 6 0a3 7 0 1 0-6 0Zm-4 0h14m-2 5l5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z81slaclh {
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}
</style><g class="ulnmmdpxh"><path class="z81slaclh"/><path class="qkii7vicd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ai-web-search"} {...others} />);
}

export default Component;
