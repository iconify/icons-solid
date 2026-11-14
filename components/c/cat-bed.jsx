import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.og1t_xayx {
  d: path("M2.5 10.5v3a9.5 5 0 0 0 19 0v-3");
}

.qaj-sobli {
  d: path("M7 10a5 1.75 0 1 0 10 0a5 1.75 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1jse2nxo {
  d: path("M2.5 10.5a9.5 5 0 1 0 19 0a9.5 5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="y1jse2nxo"/><path class="og1t_xayx"/><path class="qaj-sobli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cat-bed"} {...others} />);
}

export default Component;
