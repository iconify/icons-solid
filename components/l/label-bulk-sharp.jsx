import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vxdt93bgc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 5h10c.265 0 .52.105.707.293l6 6a1 1 0 0 1 0 1.414l-6 6A1 1 0 0 1 14 19H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1");
}
</style><path class="vxdt93bgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:label-bulk-sharp"} {...others} />);
}

export default Component;
