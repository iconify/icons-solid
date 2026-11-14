import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i7-rucccy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 4.75q0 2.598 2.25 2.946v.596q-3 .354-3 3.708t3 3.708v.596Q9 16.652 9 19.25q0 3 3 3t3-3q0-2.598-2.25-2.946v-.596q3-.354 3-3.708t-3-3.708v-.596Q15 7.348 15 4.75q0-3-3-3t-3 3");
}
</style><path class="i7-rucccy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:sequence"} {...others} />);
}

export default Component;
