import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.noeytvbdl {
  fill: currentColor;
  d: path("M12 4.81V19c-3.31 0-6-2.63-6-5.87c0-1.56.62-3.03 1.75-4.14zM6.35 7.56C4.9 8.99 4 10.96 4 13.13C4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12 2z");
}
</style><path class="noeytvbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-invert-colors"} {...others} />);
}

export default Component;
