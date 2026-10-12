import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efwj4ubut {
  d: path("M9.5 4.25v-1.5h5v10h-5Zm0 8.5h5v4.5h-5v-1.5Z");
}

.u0m9b05li {
  d: path("M4.5 11.25v10h15v-10");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="efwj4ubut"/><path class="u0m9b05li"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:litmus-paper-sharp"} {...others} />);
}

export default Component;
