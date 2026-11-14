import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-xd78bav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18l-1.75 8.5H4.75Zm4 0L5 6.25l.5-2.75L8 6.25L10 12M5 6.25h3m6.75 2C14.5 6 16 4.5 18 3.5c.5 2 .25 4-.75 5.75Zm1.25.5L14.75 12");
}
</style><path class="a-xd78bav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:craft-box"} {...others} />);
}

export default Component;
