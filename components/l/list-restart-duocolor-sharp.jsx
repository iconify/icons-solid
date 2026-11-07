import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e107k_-kq {
  d: path("M3 6h11M3 11h5m-5 5h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tha3g8bwv {
  stroke-opacity: 0.4;
  d: path("M12 17a4.472 4.472 0 1 0 0-4m3 0h-3v-3");
}
</style><g class="nrj6p8qat"><path class="tha3g8bwv"/><path class="e107k_-kq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-restart-duocolor-sharp"} {...others} />);
}

export default Component;
