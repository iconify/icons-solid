import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yiu2y7byd {
  fill: currentColor;
  d: path("M6 22V12H3V4h9v18zm8-8V2h1q2.5 0 4.25 1.75T21 8t-1.75 4.25T15 14z");
}
</style><path class="yiu2y7byd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:earbud-left-sharp"} {...others} />);
}

export default Component;
