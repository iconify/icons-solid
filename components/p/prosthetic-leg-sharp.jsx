import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i0dq6tvgz {
  d: path("M12 14.5v3.75M9 20.5v-2.25h3.75l.72.21l3.81 1.08l.72.21v1.5H9z");
}

.kmgfa_bfg {
  d: path("M9.75 2.75H15l-.18.73l-1.14 4.79l-.18.73h-3l-.18-.73l-1.14-4.79L9 2.75z");
}

.oof2upb3i {
  cx: 12px;
  cy: 13px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kmgfa_bfg"/><circle class="oof2upb3i"/><path class="i0dq6tvgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:prosthetic-leg-sharp"} {...others} />);
}

export default Component;
