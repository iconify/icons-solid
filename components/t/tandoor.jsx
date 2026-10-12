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

.jxno-rbej {
  d: path("M10.5 21.25V20a1.5 1.5 0 0 1 3 0v1.25m-7-6.75c3.5 1 7.5 1 11 0");
}

.zwbos_99n {
  d: path("M8.75 9h6.5c2.5 2 4.5 5 4.5 8.75v1.75A1.75 1.75 0 0 1 18 21.25H6a1.75 1.75 0 0 1-1.75-1.75v-1.75c0-3.75 2-6.75 4.5-8.75M12 2.75Q13.5 4.025 13.5 5a1.5 1.5 0 0 1-3 0q0-.975 1.5-2.25");
}
</style><g class="hntgybcog"><path class="zwbos_99n"/><path class="jxno-rbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tandoor"} {...others} />);
}

export default Component;
