import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aezlwcckt {
  fill: currentColor;
  d: path("M8 18h8v-5H8zm0-7h8V6H8zM4 22V2h16v20z");
}
</style><path class="aezlwcckt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:splitscreen-portrait-sharp"} {...others} />);
}

export default Component;
