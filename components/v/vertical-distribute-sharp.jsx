import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.glfby3bkz {
  fill: currentColor;
  d: path("M3 21v-1.23h18V21zm4.5-8v-2h9v2zM3 4.23V3h18v1.23z");
}
</style><path class="glfby3bkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:vertical-distribute-sharp"} {...others} />);
}

export default Component;
