import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yw-d0gbxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 5.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM12 13c-2-1.5-5.5-2-9-1.5V20c3.5-.5 7 0 9 1.5c2-1.5 5.5-2 9-1.5v-8.5c-3.5-.5-7 0-9 1.5Zm0 0v8.5");
}
</style><path class="yw-d0gbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:newspaper-user"} {...others} />);
}

export default Component;
