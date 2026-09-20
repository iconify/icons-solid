import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t5g5c4b9b {
  fill: currentColor;
  d: path("M4 18V6h2.346v12zm3.73 0V6h8.54v12zm9.924 0V6H20v12z");
}
</style><path class="t5g5c4b9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-array-sharp"} {...others} />);
}

export default Component;
