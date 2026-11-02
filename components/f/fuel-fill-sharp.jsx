import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vtusrsf2l {
  fill: currentColor;
  d: path("M14 8H2V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Zm0 5v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10h12v1h3a1 1 0 0 1 1 1v4h2V7.414l-2.707-2.707a.999.999 0 1 1 1.414-1.414l3 3A1 1 0 0 1 22 7v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Z");
}
</style><path class="vtusrsf2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fuel-fill-sharp"} {...others} />);
}

export default Component;
