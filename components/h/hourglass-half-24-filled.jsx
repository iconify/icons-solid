import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0zq4gbpu {
  fill: currentColor;
  d: path("M6.75 19.5h10.5a.25.25 0 0 0 .25-.25v-.6A3.24 3.24 0 0 0 16.08 16L14 14.52A3.22 3.22 0 0 1 12.56 12h-1.12A3.22 3.22 0 0 1 10 14.52L7.92 16a3.24 3.24 0 0 0-1.42 2.65v.6a.25.25 0 0 0 .25.25");
}
</style><path class="m0zq4gbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hourglass-half-24-filled"} {...others} />);
}

export default Component;
