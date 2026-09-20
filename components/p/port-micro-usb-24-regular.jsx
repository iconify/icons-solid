import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xpstmib5c {
  fill: currentColor;
  d: path("M15.172 10.5a.5.5 0 0 1 .353.146l1.829 1.829a.5.5 0 0 1 .146.353V13a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.172a.5.5 0 0 1 .146-.353l1.829-1.828a.5.5 0 0 1 .353-.147zm0-1.5H8.828a2 2 0 0 0-1.414.586l-1.828 1.828A2 2 0 0 0 5 12.828V13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.172a2 2 0 0 0-.586-1.414l-1.828-1.828A2 2 0 0 0 15.172 9");
}
</style><path class="xpstmib5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:port-micro-usb-24-regular"} {...others} />);
}

export default Component;
