import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o4chtcbfi {
  d: path("M4.75 19.25a10.25 4.5-45 1 1 14.5-14.5a10.25 4.5-45 1 1-14.5 14.5ZM12 12h.01");
}

.od7ufjb-t {
  d: path("M4.75 4.75a10.25 4.5 45 1 1 14.5 14.5a10.25 4.5 45 1 1-14.5-14.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="od7ufjb-t"/><path class="o4chtcbfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:neutron"} {...others} />);
}

export default Component;
