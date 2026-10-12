import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hf-4tkb5q {
  d: path("M7.75 9.6L12 12l4.25-2.4M12 12v5");
}

.k7f24rbuw {
  d: path("M2.75 7.5V2.75H7.5m9 0h4.75V7.5m0 9v4.75H16.5m-9 0H2.75V16.5m9.94-9.6l3.37 1.95l.69.4v5.5l-.69.4l-3.37 1.95l-.69.4l-.69-.4l-3.37-1.95l-.69-.4v-5.5l.69-.4l3.37-1.95l.69-.4z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k7f24rbuw"/><path class="hf-4tkb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ar-effect-sharp"} {...others} />);
}

export default Component;
