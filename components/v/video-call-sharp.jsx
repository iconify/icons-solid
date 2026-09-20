import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x56bcwl_f {
  fill: currentColor;
  d: path("M9 16h2v-3h3v-2h-3V8H9v3H6v2h3zm-7 4V4h16v6.5l4-4v11l-4-4V20z");
}
</style><path class="x56bcwl_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-call-sharp"} {...others} />);
}

export default Component;
