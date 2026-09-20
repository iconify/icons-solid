import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w7_s83blr {
  fill: currentColor;
  d: path("m10.95 15.82l4.958-4.959l-.72-.719l-4.238 4.239l-2.138-2.139l-.72.72zM4 8h16V6H4zM3 19V5h18v14z");
}
</style><path class="w7_s83blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:domain-verification-sharp"} {...others} />);
}

export default Component;
