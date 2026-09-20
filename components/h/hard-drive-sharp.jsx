import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.udg71s4rn {
  fill: currentColor;
  d: path("M17.822 14.555q.294-.29.294-.706t-.291-.71q-.292-.293-.707-.293q-.416 0-.71.291t-.292.707t.29.709t.707.293t.709-.29M21 9.653H3l3.404-3.5h11.192zm-18 7.77v-6.77h18v6.77z");
}
</style><path class="udg71s4rn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:hard-drive-sharp"} {...others} />);
}

export default Component;
