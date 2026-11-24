import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vn_oqitxd {
  fill: currentColor;
  d: path("M7 8V7a5 5 0 0 1 10 0v1h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8-1a3 3 0 1 0-6 0v1h6Zm-3 6.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 15l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 16.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 15l1.293-1.293a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="vn_oqitxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-close-fill-sharp"} {...others} />);
}

export default Component;
