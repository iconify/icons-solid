import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wge-u4beu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h9v7h-9ZM13.1 13H3v-2.5h12v.6M4.5 13L4 20m2.5-7v4.5m5-4.5v1.6m0 .8v2.1M15 15l6 6m0-6l-6 6");
}
</style><path class="wge-u4beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:no-show"} {...others} />);
}

export default Component;
