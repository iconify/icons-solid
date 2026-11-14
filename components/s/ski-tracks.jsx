import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hcauwkbvm {
  d: path("M6 21.5c0-5.5 6.5-7 6.5-12.5c0-3-1.5-5-3.5-6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ighr8abuq {
  d: path("M10 21.5c0-5.5 6.5-7 6.5-12.5c0-3-1.5-5-3.5-6.5");
}
</style><g class="hntgybcog"><path class="hcauwkbvm"/><path class="ighr8abuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ski-tracks"} {...others} />);
}

export default Component;
