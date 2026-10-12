import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wmnd-fdlk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5c-1.25 0-2 2.25-2 3.75a2 2 0 0 0 4 0c0-1.5-.75-3.75-2-3.75Zm7 0c-1.25 0-2 2.25-2 3.75a2 2 0 0 0 4 0c0-1.5-.75-3.75-2-3.75Zm7 0c-1.25 0-2 2.25-2 3.75a2 2 0 0 0 4 0c0-1.5-.75-3.75-2-3.75ZM2.75 13.25h18.5l-1.5 6.25l-.216 1.72l-1.734.03H6.2l-1.734-.03l-.216-1.72Zm5.75 0v3.25m7-3.25v3.25");
}
</style><path class="wmnd-fdlk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:egg-tray-sharp"} {...others} />);
}

export default Component;
