import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hhcul2v0d {
  fill: currentColor;
  d: path("M10 3a.5.5 0 0 1 .5.5V8H13a2 2 0 0 1 2 2v5.293l1.646-1.647a.5.5 0 0 1 .708.708l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 0 1 .708-.708L14 15.293V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5.293l1.646-1.647a.5.5 0 0 1 .708.708l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 0 1 .708-.708L5 15.293V10a2 2 0 0 1 2-2h2.5V3.5A.5.5 0 0 1 10 3");
}
</style><path class="hhcul2v0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-split-20-regular"} {...others} />);
}

export default Component;
