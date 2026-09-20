import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t0x2xlaud {
  fill: currentColor;
  d: path("m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z");
}
</style><path class="t0x2xlaud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:chevron-right-outline"} {...others} />);
}

export default Component;
