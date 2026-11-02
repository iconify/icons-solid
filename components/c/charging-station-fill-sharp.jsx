import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p06r81o1s {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8h3a1 1 0 0 1 1 1v4h2V7.414l-2.707-2.707a.999.999 0 1 1 1.414-1.414l3 3A1 1 0 0 1 22 7v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4h-2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm7.8 5.6a1 1 0 0 0-1.6-1.2l-3 4A.999.999 0 0 0 6 13h2l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4A.999.999 0 0 0 10 11H8Z");
}
</style><path class="p06r81o1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:charging-station-fill-sharp"} {...others} />);
}

export default Component;
