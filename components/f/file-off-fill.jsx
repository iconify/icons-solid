import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.khu7n1ehe {
  fill: currentColor;
  d: path("M20 17.757L5.003 2.761A3 3 0 0 1 7 2h6c.265 0 .52.105.707.293l6 6A1 1 0 0 1 20 9ZM2.707 3.293l18 18a.999.999 0 1 1-1.414 1.414l-1-.999A3 3 0 0 1 17 22H7a3 3 0 0 1-3-3V7.414L1.293 4.707a.999.999 0 1 1 1.414-1.414M13 7a2 2 0 0 0 2 2h3l-5-5Z");
}
</style><path class="khu7n1ehe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-off-fill"} {...others} />);
}

export default Component;
