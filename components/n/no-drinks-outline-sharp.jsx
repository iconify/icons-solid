import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gr3sv1pag {
  fill: currentColor;
  d: path("M6 21v-2h5v-5.15L1.4 4.225L2.8 2.8l18.4 18.4l-1.425 1.425L13 15.85V19h5v2zm8.8-9.05l-1.425-1.375L14.775 9h-2.95L9.85 7h6.7l1.8-2H7.85l-2-2H21v2zm-2.2-2.175");
}
</style><path class="gr3sv1pag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:no-drinks-outline-sharp"} {...others} />);
}

export default Component;
