import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oglwy44sb {
  d: path("m12 12l.75 7a2 2 0 0 0 2 2h.5a2 2 0 0 0 2-2l.75-7m-5-4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzcsgdaus {
  d: path("M11 5L3.5 6.5v3L11 11a5 5 0 1 0 0-6Z");
}
</style><g class="ulnmmdpxh"><path class="wzcsgdaus"/><path class="oglwy44sb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hair-dryer"} {...others} />);
}

export default Component;
