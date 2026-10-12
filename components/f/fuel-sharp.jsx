import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l_016nbnr {
  d: path("M7.75 5.5h4.5v4h-4.5zm-4 14.75h12.5m-1.5-11h3v8.5h3V8.5L18.25 6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7e5sqboh {
  d: path("M5.25 20.25V2.75h9.5v17.5Z");
}
</style><g class="x2cwu0gfd"><path class="x7e5sqboh"/><path class="l_016nbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fuel-sharp"} {...others} />);
}

export default Component;
