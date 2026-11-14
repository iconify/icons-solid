import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i4q787bzw {
  d: path("M9.5 17.5V9L12 6.5L14.5 9v8.5Zm2.5-7h.01M12 13h.01M12 15.25h.01");
}

.on8ds9bdr {
  d: path("M3.5 9a9 9 0 0 1 16.25-1.5l.75-3m0 10.5a9 9 0 0 1-16.25 1.5l-.75 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i4q787bzw"/><path class="on8ds9bdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:adaptive-reuse"} {...others} />);
}

export default Component;
