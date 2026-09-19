import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j-sb9-bwm {
  fill: currentColor;
  d: path("M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.6 7.42c-.37.37-.6.88-.6 1.4V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m3 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m3 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1");
}
</style><path class="j-sb9-bwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-sd-card"} {...others} />);
}

export default Component;
