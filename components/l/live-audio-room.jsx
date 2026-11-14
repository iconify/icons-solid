import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qpzae2b7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3h5v9.5h-5Zm-1.678 9.729a6.5 6.5 0 0 1 0-9.958m8.356 0a6.5 6.5 0 0 1 0 9.958M12 15.5V21m-3.5 0h7");
}
</style><path class="qpzae2b7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:live-audio-room"} {...others} />);
}

export default Component;
