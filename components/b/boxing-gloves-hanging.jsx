import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rackpnytl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8h4.5v3c.75.5 1.25 1.5 1.25 3v3.5a4 4 0 0 1-8 0v-4c0-1.25 1-2.25 2.25-2.5Zm10 0h4.5v3c1.25.25 2.25 1.25 2.25 2.5v4a4 4 0 0 1-8 0V14c0-1.5.5-2.5 1.25-3ZM7 8l5-5.5L17 8M9 2.5h6");
}
</style><path class="rackpnytl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:boxing-gloves-hanging"} {...others} />);
}

export default Component;
