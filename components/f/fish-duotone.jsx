import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.kjfqpq08c {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12c2-4 5-7 8-7s5 3 6 5l4-4l-2 6l2 6l-4-4c-1 2-3 5-6 5s-6-3-8-7m5-1h.01M12 10c1 1 1 3 0 4");
}

.rmk3b2_fn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 12c2-4 5-7 8-7c2.851.003 4.846 2.693 6 5l4-4l-2 6l2 6l-4-4c-1.154 2.307-3.149 4.997-6 5c-3 0-6-3-8-7");
}
</style><g class="ft5dv1b6b"><path class="rmk3b2_fn"/><path class="kjfqpq08c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fish-duotone"} {...others} />);
}

export default Component;
