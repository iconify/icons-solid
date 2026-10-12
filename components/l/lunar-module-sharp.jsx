import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mxh2uqiqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5h6l.47.88l.81 1.49l.47.88l-.47.88l-.81 1.49l-.47.88h-7l-.47-.88l-.81-1.49l-.47-.88l.47-.88l.81-1.49l.47-.88zm.75 3.25h3.5m-7.25 5.5h11v4h-11zm1.25 4l-3.25 5m11.75-5l3.25 5m-16.75 0h3.5m11.5 0h3.5");
}
</style><path class="mxh2uqiqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lunar-module-sharp"} {...others} />);
}

export default Component;
