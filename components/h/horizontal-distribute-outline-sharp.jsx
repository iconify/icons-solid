import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pu17hnbac {
  fill: currentColor;
  d: path("M3 21V3h1.23v18zm8-4.5v-9h2v9zm8.77 4.5V3H21v18z");
}
</style><path class="pu17hnbac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:horizontal-distribute-outline-sharp"} {...others} />);
}

export default Component;
