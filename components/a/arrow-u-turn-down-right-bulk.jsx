import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ue8xzq-ct {
  fill: currentColor;
  d: path("m21.707 15.707l-4 4a.999.999 0 1 1-1.414-1.414L18.586 16H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h8a1 1 0 0 1 0 2H5a.997.997 0 0 0-1 1v6a.997.997 0 0 0 1 1h13.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414");
}
</style><path class="ue8xzq-ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-u-turn-down-right-bulk"} {...others} />);
}

export default Component;
