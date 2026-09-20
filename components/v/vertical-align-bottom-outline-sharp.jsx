import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v1f6mbbnl {
  fill: currentColor;
  d: path("M5 20v-1h14v1zm7-3.692L7.692 12l.708-.708l3.1 3.1V4h1v10.392l3.1-3.1l.708.708z");
}
</style><path class="v1f6mbbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:vertical-align-bottom-outline-sharp"} {...others} />);
}

export default Component;
