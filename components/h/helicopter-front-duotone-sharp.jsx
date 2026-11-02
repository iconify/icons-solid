import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.elca2yzwo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 13a6 6 0 1 1 12 0v4H6zm2 4v4m8-4v4M6 21h4m4 0h4M6 13h12M3 3h18m-9 0v4");
}

.ft5dv1b6b {
  fill: none;
}

.xko8c_b8v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 13v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4a7 7 0 1 1 14 0");
}
</style><g class="ft5dv1b6b"><path class="xko8c_b8v"/><path class="elca2yzwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:helicopter-front-duotone-sharp"} {...others} />);
}

export default Component;
