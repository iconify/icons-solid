import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z_kqpe9ja {
  fill: currentColor;
  d: path("M14.75 16.5h1.5V15H18V9h-5v6h1.75zM6 15h1.5v-2h2v2H11V9H9.5v2.5h-2V9H6zm8.5-1.5v-3h2v3zM2 20V4h20v16z");
}
</style><path class="z_kqpe9ja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:high-quality-sharp"} {...others} />);
}

export default Component;
