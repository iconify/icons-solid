import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.etg41e6bw {
  d: path("M12.0204 4L12.0205 20.0003");
}

.g121b32ky {
  d: path("M16 12L20 12");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5l_mobdk {
  d: path("M4 12L12 12");
}
</style><g class="ipq1z-bjh"><path class="z5l_mobdk"/><path class="g121b32ky"/><path class="etg41e6bw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:add-broken"} {...others} />);
}

export default Component;
