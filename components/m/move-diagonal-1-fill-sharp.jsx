import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qmossdbfb {
  fill: currentColor;
  d: path("M4 19v-4a1 1 0 0 1 2 0v1.586L16.586 6H15a1 1 0 0 1 0-2h4a.997.997 0 0 1 1 1v4a1 1 0 0 1-2 0V7.414L7.414 18H9a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1");
}
</style><path class="qmossdbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:move-diagonal-1-fill-sharp"} {...others} />);
}

export default Component;
