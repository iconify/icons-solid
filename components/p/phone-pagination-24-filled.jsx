import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y724mwbyd {
  fill: currentColor;
  d: path("M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zM9.499 17.762a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m2.5 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m2.5 0a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="y724mwbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:phone-pagination-24-filled"} {...others} />);
}

export default Component;
