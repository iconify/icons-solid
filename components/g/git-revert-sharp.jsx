import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f2viswbeq {
  cx: 6.25px;
  cy: 16.75px;
  r: 2.25px;
}

.t8v__xbtr {
  cx: 17.75px;
  cy: 16.75px;
  r: 2.25px;
}

.utn1bffue {
  d: path("M8.5 16.75h7m2.25-5v-6H7.25m2.5-2.5l-2.5 2.5l2.5 2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="f2viswbeq"/><circle class="t8v__xbtr"/><path class="utn1bffue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:git-revert-sharp"} {...others} />);
}

export default Component;
