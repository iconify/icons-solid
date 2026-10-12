import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g828vzbqg {
  cx: 12px;
  cy: 5px;
  r: 2.25px;
}

.rvn_j9b1b {
  d: path("M8 12a4 2.5 0 0 1 8 0Zm-4.25 0h16.5v9.25H3.75zm3.5 3.5h9.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="g828vzbqg"/><path class="rvn_j9b1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:witness-stand-sharp"} {...others} />);
}

export default Component;
