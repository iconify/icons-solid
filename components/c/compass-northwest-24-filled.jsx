import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ksa99cyup {
  fill: currentColor;
  d: path("M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M8.562 7.435a.875.875 0 0 0-1.13 1.128l1.507 3.964a4.38 4.38 0 0 0 2.536 2.537l3.963 1.505a.875.875 0 0 0 1.128-1.129l-1.505-3.963a4.38 4.38 0 0 0-2.536-2.536z");
}
</style><path class="ksa99cyup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:compass-northwest-24-filled"} {...others} />);
}

export default Component;
