import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qvwe35euu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 4.25l18.5 5M6.75 5.33v4.42m10-1.75v5.25m-13-3.5h6v7h-6zm10 3.5h6v7h-6zm-10-.5h6m4 3.5h6");
}
</style><path class="qvwe35euu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:gondola-lift-sharp"} {...others} />);
}

export default Component;
