import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gkmarkbih {
  cx: 12px;
  cy: 15.25px;
  r: 6px;
}

.ivnrysbyn {
  cx: 12px;
  cy: 15.25px;
  r: 3.5px;
}

.sstohdb_f {
  d: path("M10.25 15.5L12 13.069l1.75 2.431");
}

.whbob806t {
  d: path("M12 2.75a6 2 0 1 1 0 4a6 2 0 1 1 0-4Zm-2 4v2.5m4-2.5v2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="whbob806t"/><circle class="gkmarkbih"/><circle class="ivnrysbyn"/><path class="sstohdb_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:blush-compact-sharp"} {...others} />);
}

export default Component;
