import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ye20h5m7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7h18.5M2.75 17h18.5M4.5 5l4 4m0-4l-4 4m9-4l4 4m0-4l-4 4m-5 6l4 4m0-4l-4 4m7-4l4 4m0-4l-4 4");
}
</style><path class="ye20h5m7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:barbed-wire-sharp"} {...others} />);
}

export default Component;
