import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uioqj7bms {
  fill: currentColor;
  d: path("M4 10.635V4h16v6.635zM4 20v-6.615h16V20z");
}
</style><path class="uioqj7bms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:splitscreen-sharp"} {...others} />);
}

export default Component;
