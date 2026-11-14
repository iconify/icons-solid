import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vj4matxfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h7.25c.25 3.5-.75 6.75-3.25 6.75S2.75 13 3 9Zm18 0h-7.25c-.25 3.5.75 6.75 3.25 6.75S21.25 13 21 9ZM10.25 9h3.5m-9 3.5L7 10.25m12.25 2.25L17 10.25");
}
</style><path class="vj4matxfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:aviator-sunglasses"} {...others} />);
}

export default Component;
