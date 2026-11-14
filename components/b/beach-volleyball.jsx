import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jqqdk0m7p {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7ct0sbnq {
  d: path("M12 9.5q-2.5-3.5 0-7m0 7q4.5.5 5.75 4M12 9.5q-4 2.5-5.75 4M3 20.5q4.5-2.5 9 0t9 0");
}
</style><g class="ulnmmdpxh"><path class="jqqdk0m7p"/><path class="x7ct0sbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:beach-volleyball"} {...others} />);
}

export default Component;
