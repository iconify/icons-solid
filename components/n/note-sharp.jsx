import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.shfnsub0f {
  d: path("M20.25 13.75v-10H3.75v16.5h10Z");
}

.t0wlzuf-v {
  d: path("M13.75 20.25v-6.5h6.5m-12.5-5.5h8.5m-8.5 3.5h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="shfnsub0f"/><path class="t0wlzuf-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:note-sharp"} {...others} />);
}

export default Component;
