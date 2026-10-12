import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ckdeowbwc {
  cx: 12px;
  cy: 6px;
  r: 3.25px;
}

.eumxs70ky {
  cx: 6px;
  cy: 12.75px;
  r: 3px;
}

.orvilebhc {
  d: path("m6 15.75l6 5.5m6-5.5l-6 5.5m0-12v12");
}

.w3k3zt4wy {
  cx: 18px;
  cy: 12.75px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="eumxs70ky"/><circle class="w3k3zt4wy"/><circle class="ckdeowbwc"/><path class="orvilebhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:balloon-sharp"} {...others} />);
}

export default Component;
