import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u5gto-b8u {
  d: path("M10.75 13.25h2.5v8h-2.5zm-2-4.75a3.25 3 0 0 1 3.25-3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysa2-oqog {
  d: path("M12 3a6 5.5 0 1 1 0 11a6 5.5 0 1 1 0-11Z");
}
</style><g class="x2cwu0gfd"><path class="ysa2-oqog"/><path class="u5gto-b8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mirror-hand-sharp"} {...others} />);
}

export default Component;
