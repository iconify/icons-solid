import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.blt_0abbn {
  fill: currentColor;
  d: path("M5.21 7.781A.75.75 0 1 1 6.27 6.72l2.51 2.5a.75.75 0 0 1 0 1.061l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H2.75a.75.75 0 0 1 0-1.5h3.684zm9.58 0a.75.75 0 0 0-1.06-1.062l-2.51 2.5a.75.75 0 0 0 0 1.061l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h3.69a.75.75 0 0 0 0-1.5h-3.684z");
}
</style><path class="blt_0abbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-fit-in-20-filled"} {...others} />);
}

export default Component;
