import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r9mg90h5a {
  fill: currentColor;
  d: path("M20 21V3h1v18zM3 21V3h1v18zm9.5-11.5v-2h5v2zm-6 0v-2h5v2zm6 7v-2h5v2zm-6 0v-2h5v2z");
}
</style><path class="r9mg90h5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-justify-stretch-outline-sharp"} {...others} />);
}

export default Component;
