import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.llilh5ddm {
  d: path("M15.25 19.5a3 5.25 0 0 1 6 0M9.75 12h4.5M12 12v7.5");
}

.nbp9vlbqw {
  cx: 18.25px;
  cy: 8.5px;
  r: 2.5px;
}

.om__bzh9z {
  cx: 5.75px;
  cy: 8.5px;
  r: 2.5px;
}

.ptdmkpbch {
  d: path("M2.75 19.5a3 5.25 0 0 1 6 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="om__bzh9z"/><path class="ptdmkpbch"/><circle class="nbp9vlbqw"/><path class="llilh5ddm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mediation-sharp"} {...others} />);
}

export default Component;
