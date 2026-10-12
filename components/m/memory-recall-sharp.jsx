import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.edl-ivdhk {
  d: path("M7.75 10.25a3.25 3.25 0 1 0 .95-2.3m-2.45.8l1.5 1.5l1.5-1.5");
}

.p8p68hbgf {
  d: path("M6.75 21.25v-5.1a7.25 7.25 0 1 1 11.5-5.9l1.75 3.1l.52.901l-1.04-.001h-1.23v4.5H14.5v2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="p8p68hbgf"/><path class="edl-ivdhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:memory-recall-sharp"} {...others} />);
}

export default Component;
