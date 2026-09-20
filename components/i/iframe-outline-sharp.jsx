import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mh655obmw {
  fill: currentColor;
  d: path("M11.5 13.5h5v-2h-5zM10 15v-5h8v5zm-8 5V4h20v16zm2-2h16V8H4z");
}
</style><path class="mh655obmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:iframe-outline-sharp"} {...others} />);
}

export default Component;
