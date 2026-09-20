import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kmf5k0k8q {
  fill: currentColor;
  d: path("m11 19l3.425-6H2v-2h12.425L11 5l11 7z");
}
</style><path class="kmf5k0k8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end-arrow-notch-outline-sharp"} {...others} />);
}

export default Component;
