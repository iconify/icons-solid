import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h9k4e4b6v {
  d: path("M9.5 8.5V20h6a3.5 3.5 0 0 0 3.5-3.5V4");
}

.j0v9ghixt {
  d: path("M5 20V4h6a3.5 3.5 0 0 1 3.5 3.5v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j0v9ghixt"/><path class="h9k4e4b6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:shekel-sign"} {...others} />);
}

export default Component;
