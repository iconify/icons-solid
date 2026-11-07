import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aezblib2a {
  stroke-opacity: 0.4;
  d: path("M3.16 6.523L7.83 8.83M12 13v8.885m2.374-12.168l6.466-3.194M2 3l19 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w1umsbb2j {
  d: path("m4.636 5.636l-1.079.533A1 1 0 0 0 3 7.066v9.868a1 1 0 0 0 .557.897l8 3.95a1 1 0 0 0 .886 0l5.582-2.756M8.423 3.766l3.134-1.547a1 1 0 0 1 .886 0l8 3.95a1 1 0 0 1 .557.897v9.277");
}
</style><g class="nrj6p8qat"><path class="aezblib2a"/><path class="w1umsbb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:box-off-duocolor"} {...others} />);
}

export default Component;
