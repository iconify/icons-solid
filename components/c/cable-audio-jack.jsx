import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ai7un0e_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V8M9.5 8h5v7.5h-5Zm2.5 7.5V18a2.5 2.5 0 0 1-2.5 2.5h-5m6.25-16.25h2.5m-2.5 2h2.5");
}
</style><path class="ai7un0e_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cable-audio-jack"} {...others} />);
}

export default Component;
