import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mlhu1qm_b {
  d: path("M8.25 21.5v-5h3v5m3.75-4h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.rjv4fccbb {
  d: path("M12.2 21.5H3v-19h13.5v10M8 6.5h.25m3.25 0h.25M8 10.5h.25m3.25 0h.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rjv4fccbb"/><path class="mlhu1qm_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:building-lockdown"} {...others} />);
}

export default Component;
