import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jggx_ob-x {
  fill: currentColor;
  d: path("M3 20V7h5V3.77h8V7h5v13zM9 7h6V4.77H9zm-5 9.577h16v-2.154H4z");
}
</style><path class="jggx_ob-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:card-travel-sharp"} {...others} />);
}

export default Component;
