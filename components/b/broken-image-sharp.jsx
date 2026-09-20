import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ytixpqzsh {
  fill: currentColor;
  d: path("M4 20v-7.292l2 2l4-4l4 4l4-4l2 2V20zM4 4h16v7.287l-2-2l-4 4l-4-4l-4 4l-2-2z");
}
</style><path class="ytixpqzsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:broken-image-sharp"} {...others} />);
}

export default Component;
