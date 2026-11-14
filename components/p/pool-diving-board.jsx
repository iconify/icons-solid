import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ersdzgbmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h15V9h-15ZM3 9h4.5l-1 12h-3Zm7 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 8q2-1.5 4 0t4 0t3.5-.25");
}
</style><path class="ersdzgbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pool-diving-board"} {...others} />);
}

export default Component;
