import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.toyu16stp {
  d: path("M8 13.5c1.25-1 1-2.5 1-3.5a3 3 0 0 1 6 0c0 1-.25 2.5 1 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yq1hwz16p {
  d: path("M5 2.5h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Zm4.5 14V21m5-4.5V21");
}
</style><g class="ulnmmdpxh"><path class="yq1hwz16p"/><path class="toyu16stp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:plug-in-chime"} {...others} />);
}

export default Component;
