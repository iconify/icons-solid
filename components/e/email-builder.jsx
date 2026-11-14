import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hx-pw8b-f {
  d: path("M12.2 19.5H2.5V3h17v9.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vx50i3bgf {
  d: path("M3.25 4L11 9l7.75-5M6.5 12.5h8.7M6.5 16H12m6-1v6m-3-3h6");
}
</style><g class="ulnmmdpxh"><path class="hx-pw8b-f"/><path class="vx50i3bgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:email-builder"} {...others} />);
}

export default Component;
