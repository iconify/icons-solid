import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jhou5kbdz {
  fill: currentColor;
  d: path("M11.5 13.577L17.077 10L11.5 6.423zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="jhou5kbdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:video-library-sharp"} {...others} />);
}

export default Component;
