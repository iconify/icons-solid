import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pq6kzkbfe {
  d: path("M12 4.25c-3 4-6.5 8-6.5 11.5c0 2.25 1 4 2.5 4h8c1.5 0 2.5-1.75 2.5-4c0-3.5-3.5-7.5-6.5-11.5Zm-9.5 15.5h19");
}

.r4-gfihlw {
  d: path("M8.75 14.25C8.75 16 9.75 17 11 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pq6kzkbfe"/><path class="r4-gfihlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:surface-tension"} {...others} />);
}

export default Component;
