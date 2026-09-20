import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.nmw6kwb2q {
  fill: currentColor;
  d: path("M3.753 2.126A1.25 1.25 0 0 1 4.836 1.5h3.17c.446 0 .86.238 1.082.626l1.586 2.75a1.25 1.25 0 0 1 0 1.248L9.09 8.874a1.25 1.25 0 0 1-1.083.626h-3.17a1.25 1.25 0 0 1-1.083-.626l-1.586-2.75a1.25 1.25 0 0 1 0-1.248zM12.597 6c-.447 0-.86.239-1.083.626l-1.586 2.75a1.25 1.25 0 0 0 0 1.248l1.586 2.75a1.25 1.25 0 0 0 1.083.626h3.17a1.25 1.25 0 0 0 1.082-.626l1.586-2.75a1.25 1.25 0 0 0 0-1.248l-1.586-2.75A1.25 1.25 0 0 0 15.766 6zm-8.844 5.126a1.25 1.25 0 0 1 1.083-.626h3.17c.446 0 .86.239 1.082.626l1.586 2.75a1.25 1.25 0 0 1 0 1.248l-1.585 2.75a1.25 1.25 0 0 1-1.083.626h-3.17a1.25 1.25 0 0 1-1.083-.626l-1.586-2.75a1.25 1.25 0 0 1 0-1.248z");
}
</style><path class="nmw6kwb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hexagon-three-20-filled"} {...others} />);
}

export default Component;
