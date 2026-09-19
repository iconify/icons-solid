import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qqhb9jy5i {
  fill: currentColor;
  d: path("m11.13 4.57l-8.3 14.94c-.37.67.11 1.49.87 1.49h16.6c.76 0 1.24-.82.87-1.49l-8.3-14.94a.997.997 0 0 0-1.74 0M13 8.92L18.6 19H13zm-2 0V19H5.4z");
}
</style><path class="qqhb9jy5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-details"} {...others} />);
}

export default Component;
