import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fns3unp6e {
  fill: currentColor;
  d: path("M9.5 15H11v-2h1.5v2H14V9h-1.5v2.5H11V9H9.5zm5.5 0h3.75l.75-.75v-4.5L18.75 9H15zm1.5-1.5v-3H18v3zM4.5 15H6v-2h2v-1.5H6v-1h2.5V9h-4zM1 20V4h22v16zm2-2h18V6H3zm0 0V6z");
}
</style><path class="fns3unp6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:full-hd-outline-sharp"} {...others} />);
}

export default Component;
