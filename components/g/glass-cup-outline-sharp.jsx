import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sv-s6pbil {
  fill: currentColor;
  d: path("M6.027 21L4 3h16l-2.008 18zm.614-3.5l.282 2.5h10.173l.283-2.5zm-.104-1h10.952L18.866 4H5.116zM6.64 20h10.738z");
}
</style><path class="sv-s6pbil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:glass-cup-outline-sharp"} {...others} />);
}

export default Component;
