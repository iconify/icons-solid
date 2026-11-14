import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blm34sbft {
  d: path("M14 2v4a2 2 0 0 1-4 0V4.5");
}

.drl6ibc0d {
  d: path("M12 8c4.25 2.25 4.25 7.25 0 9.5l3.25 4h-6.5l3.25-4c-4.25-2.25-4.25-7.25 0-9.5m0 3.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="blm34sbft"/><path class="drl6ibc0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fish-caught"} {...others} />);
}

export default Component;
