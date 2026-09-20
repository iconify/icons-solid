import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nmmso4q5h {
  fill: currentColor;
  d: path("M2 22v-2h20v2zm8.5-4V4h3v14z");
}
</style><path class="nmmso4q5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-flex-end-sharp"} {...others} />);
}

export default Component;
