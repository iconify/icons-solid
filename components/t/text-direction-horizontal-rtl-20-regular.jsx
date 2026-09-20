import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.c--kidc9p {
  fill: currentColor;
  d: path("M13.5 3a.5.5 0 0 0-.468.324l-3 8a.5.5 0 0 0 .936.352L11.972 9h3.057l1.003 2.676a.5.5 0 0 0 .936-.352l-3-8A.5.5 0 0 0 13.5 3m0 1.924L14.653 8h-2.306zm-8.354-.778a.5.5 0 1 1 .708.708L4.707 6H9.5a.5.5 0 0 1 0 1H4.707l1.147 1.146a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708.708L4.707 14H16.5a.5.5 0 0 1 0 1H4.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708z");
}
</style><path class="c--kidc9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-direction-horizontal-rtl-20-regular"} {...others} />);
}

export default Component;
