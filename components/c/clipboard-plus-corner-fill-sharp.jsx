import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jnc-ynbbr {
  fill: currentColor;
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6h-2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6H6v14h3a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3Zm10 10v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0");
}
</style><path class="jnc-ynbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clipboard-plus-corner-fill-sharp"} {...others} />);
}

export default Component;
