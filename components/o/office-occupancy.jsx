import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bipl6eb0y {
  d: path("M5 2.5h14v19H5Zm-2.5 19H5m14 0h2.5m-13-16h.01m3.49 0h.01m3.49 0h.01M8.5 8.75h.01m3.49 0h.01m3.49 0h.01M8.5 12h.01M12 12h.01m3.49 0h.01");
}

.slogrl5rd {
  fill: currentColor;
  d: path("M5 15h14v6.5H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bipl6eb0y"/><path class="slogrl5rd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:office-occupancy"} {...others} />);
}

export default Component;
