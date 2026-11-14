import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mcp7jfb-j {
  d: path("M10 20.5v-5h4v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdcuzdgza {
  d: path("M2.5 12L12 7.5l9.5 4.5v8.5h-19ZM12 7.5v-5m0 0h4.5v3H12");
}
</style><g class="ulnmmdpxh"><path class="vdcuzdgza"/><path class="mcp7jfb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:barracks"} {...others} />);
}

export default Component;
