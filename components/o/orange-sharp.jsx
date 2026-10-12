import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzfoek8uc {
  d: path("M12.5 5.25V3.107L15 2.75v2.143zM7 13a5 5 0 0 1 2.5-4.35");
}

.w6czd5b3h {
  cx: 12px;
  cy: 13.25px;
  r: 8px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="w6czd5b3h"/><path class="hzfoek8uc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:orange-sharp"} {...others} />);
}

export default Component;
