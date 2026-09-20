import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p1sdyd2_h {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm11.5-3.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2z");
}
</style><path class="p1sdyd2_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:create-new-folder-sharp"} {...others} />);
}

export default Component;
