import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w5jndacpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3h17.75v6.5h-3.7v3h-3.7v3h-3.7v3h-3.7v2.75h-3.7V3zm-.75 3.75h18.5m-14.8 0V18.5m3.7-11.75v8.75m3.7-8.75v5.75m3.7-5.75V9.5");
}
</style><path class="w5jndacpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pan-flute-sharp"} {...others} />);
}

export default Component;
