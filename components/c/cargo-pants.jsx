import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gjohz4b-n {
  d: path("M5 10.5h3.25v6H4.5m14.5-6h-3.25v6h3.75");
}

.kfvkns3dx {
  d: path("M5.5 2.5h13l1.5 19h-6.25L12 10l-1.75 11.5H4Zm0 3h13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kfvkns3dx"/><path class="gjohz4b-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cargo-pants"} {...others} />);
}

export default Component;
