import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zisgoccru {
  fill: currentColor;
  d: path("M17 13h-5v5h5zM16 2v2H8V2H6v2H3.01L3 22h18V4h-3V2zm3 18H5V9h14z");
}
</style><path class="zisgoccru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-event"} {...others} />);
}

export default Component;
