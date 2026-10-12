import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j18zj9mqg {
  d: path("m10.39 14.89l8.13-5.87a2.5 2.5 0 0 0-3.54-3.54l-5.87 8.13Zm-.64-.64l-5 5M3.5 18L6 20.5");
}

.tdcmh-bcw {
  cx: 6.75px;
  cy: 6.75px;
  r: 2.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="j18zj9mqg"/><circle class="tdcmh-bcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:baseball-bat-sharp"} {...others} />);
}

export default Component;
