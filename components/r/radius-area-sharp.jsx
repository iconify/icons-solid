import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.npn_drbgz {
  d: path("M20.93 9.61a9.25 9.25 0 0 1 0 4.78m-.92 2.24a9.25 9.25 0 0 1-3.38 3.38m-2.24.92a9.25 9.25 0 0 1-4.78 0m-2.23-.92a9.25 9.25 0 0 1-3.39-3.38m-.92-2.24a9.25 9.25 0 0 1 0-4.78m.92-2.24a9.25 9.25 0 0 1 3.38-3.38m2.24-.92a9.25 9.25 0 0 1 4.78 0m2.24.92a9.25 9.25 0 0 1 3.38 3.38");
}

.peiq2hfxm {
  cx: 12px;
  cy: 12px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y83w3sblz {
  d: path("M13.75 12h7.5");
}
</style><g class="x2cwu0gfd"><path class="npn_drbgz"/><circle class="peiq2hfxm"/><path class="y83w3sblz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:radius-area-sharp"} {...others} />);
}

export default Component;
