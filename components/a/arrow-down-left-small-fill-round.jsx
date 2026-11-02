import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkzb6vbjm {
  fill: currentColor;
  d: path("M7 16v-6a1 1 0 0 1 2 0v3.586l6.293-6.293a.999.999 0 1 1 1.414 1.414L10.414 15H14a1 1 0 0 1 0 2H8a.997.997 0 0 1-1-1");
}
</style><path class="bkzb6vbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-left-small-fill-round"} {...others} />);
}

export default Component;
