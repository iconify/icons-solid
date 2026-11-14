import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d9f698bcx {
  d: path("M2.5 10v8.75a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75V10M5 3h2.75v2.75H5Zm5.5 0h2.75v2.75H10.5ZM16 3h2.75v2.75H16Z");
}

.uhkacjz7v {
  d: path("M5 8.5h2.75v2.75H5Zm5.5 0h2.75v2.75H10.5Zm5.5 0h2.75v2.75H16ZM5 14h2.75v2.75H5Zm5.5 0h2.75v2.75H10.5Zm5.5 0h2.75v2.75H16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d9f698bcx"/><path class="uhkacjz7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:stream-deck"} {...others} />);
}

export default Component;
