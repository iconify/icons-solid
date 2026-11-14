import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jew5zttbn {
  d: path("M12.2 19.5H3.5V3h9v12.2m-10 4.3h9.7m.3-11h2A1.5 1.5 0 0 1 16 10v3a1.5 1.5 0 0 0 3 0V7.5L16.5 5");
}

.po8vcmbgr {
  d: path("M6.25 6.25h3.5v3.5h-3.5ZM15 18h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jew5zttbn"/><path class="po8vcmbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gas-limit"} {...others} />);
}

export default Component;
