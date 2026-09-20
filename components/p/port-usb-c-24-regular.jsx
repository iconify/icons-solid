import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zklpa5btr {
  fill: currentColor;
  d: path("M16 10.5a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3zM16 9H8a3 3 0 1 0 0 6h8a3 3 0 0 0 0-6");
}
</style><path class="zklpa5btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:port-usb-c-24-regular"} {...others} />);
}

export default Component;
