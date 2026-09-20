import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jizizubxe {
  fill: currentColor;
  d: path("M5 18.277V3l8 3.198v15.29zM15 18V4.842L10.392 3H19v15z");
}
</style><path class="jizizubxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dual-screen-sharp"} {...others} />);
}

export default Component;
