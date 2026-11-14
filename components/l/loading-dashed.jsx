import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v-13r6bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5a9.5 9.5 0 0 1 6.718 16.218m-3.469 2.209A9.5 9.5 0 0 1 12 21.5m-4.015-.89a9.5 9.5 0 0 1-2.703-1.892m-2.209-3.469A9.5 9.5 0 0 1 2.5 12m.89-4.015a9.5 9.5 0 0 1 1.892-2.703");
}
</style><path class="v-13r6bcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:loading-dashed"} {...others} />);
}

export default Component;
