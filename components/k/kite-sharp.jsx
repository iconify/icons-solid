import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dekgbmfcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.95 3.56l5.1 4.38l.95.81l-.9.87l-5.2 5.01l-.9.87l-.9-.87l-5.2-5.01l-.9-.87l.95-.81l5.1-4.38l.95-.81zM12 5.25V13M7.75 8.75h8.5M12 16.25c0 1.5-1.75 1.5-1.75 2.5s1.75 1 1.75 2.5");
}
</style><path class="dekgbmfcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kite-sharp"} {...others} />);
}

export default Component;
