import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pusq2eb7r {
  fill: currentColor;
  d: path("M13 2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9v2h9v-4h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM9.707 6.707a.999.999 0 1 0-1.414-1.414l-3 3A1 1 0 0 0 6 10h1.586l-1.293 1.293a.999.999 0 1 0 1.414 1.414l3-3A1 1 0 0 0 10 8H8.414Z");
}
</style><path class="pusq2eb7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wallbox-fill-sharp"} {...others} />);
}

export default Component;
