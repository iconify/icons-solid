import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7xhj4a2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19m-15 0v-6m0-2.75V6M12 21.5v-4m0-2.75V9m0-2.75V2.5m5.5 19V14m0-2.75V8m-11 1.5q-3 0-4-3.5q3 .5 4 3.5Zm11 1.75q3 0 4-3.5q-3 .5-4 3.5Z");
}
</style><path class="h7xhj4a2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bamboo-grove"} {...others} />);
}

export default Component;
