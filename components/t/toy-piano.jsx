import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dk5wt9tbn {
  d: path("M6 9v3.5h2.5V9m-1.25 3.5V17M12 9v8m3.5-8v3.5H18V9m-1.25 3.5V17M4.5 17v3.5m15-3.5v3.5");
}

.f9_gy2b0g {
  d: path("M2.5 4h19v13h-19Zm0 5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f9_gy2b0g"/><path class="dk5wt9tbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:toy-piano"} {...others} />);
}

export default Component;
