import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.im8-kzb2t {
  d: path("M12 6.5C10 5 6.5 4.5 2.5 5v14c4-.5 7.5 0 9.5 1.5c2-1.5 5.5-2 9.5-1.5V5c-4-.5-7.5 0-9.5 1.5m0 0v14");
}

.wb7rpab6r {
  d: path("m14.75 12l1.5 1.5L19 10");
}
</style><g class="hntgybcog"><path class="im8-kzb2t"/><path class="wb7rpab6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:compliance-training"} {...others} />);
}

export default Component;
