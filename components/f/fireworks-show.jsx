import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vq5he_-dz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5v-4m3 7h4m-10 0H5m9.25-2.25l1.5-1.5m-6 1.5l-1.5-1.5m6 6l1.5 1.5m-6-1.5l-1.5 1.5M12 21.5v-6m5.75-11.75h.01m-11.51 0h.01m11.49 11.5h.01m-11.51 0h.01");
}
</style><path class="vq5he_-dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fireworks-show"} {...others} />);
}

export default Component;
