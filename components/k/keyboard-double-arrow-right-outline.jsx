import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.egnef3bkp {
  fill: currentColor;
  d: path("M10.537 12L5.942 7.4l.708-.708L11.958 12L6.65 17.308l-.708-.708zm6.1 0l-4.595-4.6l.708-.708L18.058 12l-5.308 5.308l-.708-.708z");
}
</style><path class="egnef3bkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-double-arrow-right-outline"} {...others} />);
}

export default Component;
