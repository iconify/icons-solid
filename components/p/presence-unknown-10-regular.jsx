import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":10,"height":10};
const content = `<style>.ov45av1-f {
  fill: currentColor;
  d: path("M4.999 1a3.999 3.999 0 1 0 0 7.997a3.999 3.999 0 0 0 0-7.997M0 4.999a4.999 4.999 0 1 1 9.997 0a4.999 4.999 0 0 1-9.997 0");
}
</style><path class="ov45av1-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-unknown-10-regular"} {...others} />);
}

export default Component;
