import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qsv5997ug {
  fill: currentColor;
  d: path("M6 8.25h8v1.5H6zm10.5 1.5H18v-1.5h-1.5V7H15v4h1.5zm-6.5 2.5h8v1.5h-8zM7.5 15H9v-4H7.5v1.25H6v1.5h1.5z");
}

.r0xmiylwe {
  fill: currentColor;
  d: path("M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z");
}
</style><path class="r0xmiylwe"/><path class="qsv5997ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-display-settings"} {...others} />);
}

export default Component;
