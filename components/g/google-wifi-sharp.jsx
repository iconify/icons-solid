import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iso48en0p {
  fill: currentColor;
  d: path("M2.6 10L3 4h18l.4 6zM5 20l-.325-1H2l.475-7h19.05L22 19h-2.675L19 20z");
}
</style><path class="iso48en0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:google-wifi-sharp"} {...others} />);
}

export default Component;
