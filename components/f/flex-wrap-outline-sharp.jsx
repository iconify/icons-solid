import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.otoq3qbjd {
  fill: currentColor;
  d: path("M1 22v-9h6v9zm8 0v-9h6v9zm8 0v-9h6v9zm-6-2h2v-5h-2zM1 11V2h6v9zm8 0V2h6v9zm8 0V2h6v9zM3 9h2V4H3zm16 0h2V4h-2z");
}
</style><path class="otoq3qbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flex-wrap-outline-sharp"} {...others} />);
}

export default Component;
