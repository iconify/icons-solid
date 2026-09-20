import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.qr2q51bxz {
  fill: currentColor;
  d: path("M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25zM6.75 4.5A2.25 2.25 0 0 0 4.5 6.75V13h19V6.75a2.25 2.25 0 0 0-2.25-2.25zM4.5 17.174L6.64 14.5H4.5zM5.76 18h4.534l1.095-3.5H8.56zM4.5 19.5v1.75a2.25 2.25 0 0 0 2.25 2.25h1.824l1.251-4zm6.897 0l-1.252 4h8.21l-1.252-4zm7.278 0l1.251 4h1.324a2.25 2.25 0 0 0 2.25-2.25V19.5zm3.564-1.5l-2.8-3.5h-2.328l1.095 3.5zm-5.605 0l-1.095-3.5h-2.578L11.866 18zm6.866-.826V14.5h-2.14z");
}
</style><path class="qr2q51bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:space-3d-28-regular"} {...others} />);
}

export default Component;
