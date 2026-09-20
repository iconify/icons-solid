import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.l65pn3-yu {
  fill: currentColor;
  d: path("M6.75 2a.75.75 0 0 0-.75.75v13.5A2.75 2.75 0 0 0 8.75 19H11v4a3 3 0 0 0 4.16 2.767a7.5 7.5 0 0 1-1.01-1.275q-.075.008-.15.008a1.5 1.5 0 0 1-1.5-1.5v-4.75a.75.75 0 0 0-.75-.75h-3c-.69 0-1.25-.56-1.25-1.25V14.5H16a7.47 7.47 0 0 1 4.5-1.5q.772.002 1.5.15V2.75a.75.75 0 0 0-.75-.75zM20.5 13h-13V3.5h7v2.75a.75.75 0 0 0 1.5 0V3.5h1.5v4.75a.75.75 0 0 0 1.5 0V3.5h1.5zm0 14a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M16 20.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5");
}
</style><path class="l65pn3-yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:paint-brush-subtract-28-regular"} {...others} />);
}

export default Component;
