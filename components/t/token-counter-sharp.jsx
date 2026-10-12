import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ekggvtblj {
  cx: 8.75px;
  cy: 12px;
  r: 6px;
}

.ova03jb8f {
  d: path("M6.25 9.5h5m-2.5 0V15M19 9.75v4.5M16.75 12h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ekggvtblj"/><path class="ova03jb8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:token-counter-sharp"} {...others} />);
}

export default Component;
