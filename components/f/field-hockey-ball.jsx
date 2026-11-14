import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hn5zjyfrh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm7-3h.01m-3.01 3h.01m5.99 0h.01m-3.01 3h.01M2.5 9H5m-2.5 6H5");
}
</style><path class="hn5zjyfrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:field-hockey-ball"} {...others} />);
}

export default Component;
