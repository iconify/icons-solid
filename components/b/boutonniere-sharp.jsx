import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pcd_fpbrb {
  d: path("M12.75 9A2.25 2.25 0 1 0 15 6.75m-5.5 9c-3.5 0-5.75-2-6.25-4.75c3 0 5.5 1.5 6.25 4.75Zm1.75-3L5 19m.25-2L12 21.25");
}

.q3-to6b0w {
  cx: 15px;
  cy: 9px;
  r: 5.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="q3-to6b0w"/><path class="pcd_fpbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:boutonniere-sharp"} {...others} />);
}

export default Component;
