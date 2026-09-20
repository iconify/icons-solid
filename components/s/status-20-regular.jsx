import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hwrakxb2q {
  fill: currentColor;
  d: path("M17.354 2.647a2.62 2.62 0 0 0-3.707 0l-5.5 5.5a.5.5 0 0 0-.132.232l-1 4a.5.5 0 0 0 .606.606l4-1a.5.5 0 0 0 .233-.131l5.5-5.5a2.62 2.62 0 0 0 0-3.707m-3 .707a1.621 1.621 0 0 1 2.293 2.293l-5.403 5.402l-3.057.764l.764-3.057zM10 4q.42.001.823.056l.854-.854a7 7 0 1 0 5.121 5.121l-.854.854Q16 9.582 16 10a6 6 0 1 1-6-6");
}
</style><path class="hwrakxb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:status-20-regular"} {...others} />);
}

export default Component;
