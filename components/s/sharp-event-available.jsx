import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yk7sodbsf {
  fill: currentColor;
  d: path("M16.53 11.06L15.47 10l-4.88 4.88l-2.12-2.12l-1.06 1.06L10.59 17zM21 3h-3V1h-2v2H8V1H6v2H3v18h18zm-2 16H5V8h14z");
}
</style><path class="yk7sodbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-event-available"} {...others} />);
}

export default Component;
