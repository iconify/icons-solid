import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.p6tpubbuv {
  fill: currentColor;
  d: path("M17 6a4 4 0 0 1-7.326 2.222l-1.668.834C8.62 9.687 9 10.55 9 11.5q-.002.56-.166 1.067l2.7 1.388a2.5 2.5 0 1 1-.449.894l-2.689-1.383a3.5 3.5 0 1 1-1.291-5.077l2.12-1.06A4 4 0 1 1 17 6");
}
</style><path class="p6tpubbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:molecule-20-filled"} {...others} />);
}

export default Component;
