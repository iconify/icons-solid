import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ucf-3acpg {
  d: path("m13 9l-2.5 3.5h3L11 16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yjvhf_b-d {
  d: path("M7 18.5h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 10a4.25 4.25 0 0 0 1 8.5Z");
}
</style><g class="ulnmmdpxh"><path class="yjvhf_b-d"/><path class="ucf-3acpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cdn-cache"} {...others} />);
}

export default Component;
