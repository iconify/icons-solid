import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dpgfb3bbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.802 6.316l6.761 1.811L7.474 20.49l-5.313-1.423Zm7.635 1.811l6.761-1.811l2.641 12.751l-5.313 1.423ZM12 2.5v2m-3-.75L9.75 5M15 3.75L14.25 5");
}
</style><path class="dpgfb3bbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:beer-cheers"} {...others} />);
}

export default Component;
