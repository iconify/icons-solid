import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.flid9ubpn {
  fill: currentColor;
  d: path("M15.75 2c-.69 0-1.25.56-1.25 1.25V8H9.25C8.56 8 8 8.56 8 9.25v5.25H3.25c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h15.5A3.25 3.25 0 0 0 22 18.75V3.25C22 2.56 21.44 2 20.75 2z");
}
</style><path class="flid9ubpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:step-24-filled"} {...others} />);
}

export default Component;
