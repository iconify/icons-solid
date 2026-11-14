import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e8ntogbjc {
  d: path("M4.75 4.75a10.25 4.5 45 1 1 14.5 14.5a10.25 4.5 45 1 1-14.5-14.5");
}

.f7sduabpt {
  d: path("M4.75 19.25a10.25 4.5-45 1 1 14.5-14.5a10.25 4.5-45 1 1-14.5 14.5M12 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e8ntogbjc"/><path class="f7sduabpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:neutron"} {...others} />);
}

export default Component;
