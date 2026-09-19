import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mw_eh8bqc {
  fill: currentColor;
  d: path("M21 6H3v12h18zm-2 10H5V8h14z");
}
</style><path class="mw_eh8bqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-crop-3-2"} {...others} />);
}

export default Component;
