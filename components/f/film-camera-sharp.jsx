import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d047u4cgu {
  d: path("M2.75 7.75h18.5v12H2.75zm1.75-3h4v3h-4zm11 0h4v3h-4z");
}

.lzsw5jwij {
  cx: 12px;
  cy: 13.75px;
  r: 3.75px;
}

.mxvfb2okv {
  d: path("M2.75 11.25H7m10 0h4.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="d047u4cgu"/><circle class="lzsw5jwij"/><path class="mxvfb2okv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:film-camera-sharp"} {...others} />);
}

export default Component;
