import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i5nsu8bek {
  d: path("M10 12h-.5a1 1 0 0 0-1 1v.5a1 1 0 0 1-1 1a1 1 0 0 1 1 1v.5a1 1 0 0 0 1 1h.5m4-5h.5a1 1 0 0 1 1 1v.5a1 1 0 0 0 1 1a1 1 0 0 0-1 1v.5a1 1 0 0 1-1 1H14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zpx_6t8ti {
  d: path("M7 19a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7Z");
}
</style><g class="ulnmmdpxh"><path class="zpx_6t8ti"/><path class="i5nsu8bek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cloud-api"} {...others} />);
}

export default Component;
