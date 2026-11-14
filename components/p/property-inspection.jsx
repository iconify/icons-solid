import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.im6tvcbah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 2.5l4 4l3 1l-5 5l-1-3l-4-4Zm8.5 15l3.25-3.5l3.25 3.5v4H14Zm-.25-9l7.75 4m-13 1.25l3 7.75");
}
</style><path class="im6tvcbah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:property-inspection"} {...others} />);
}

export default Component;
