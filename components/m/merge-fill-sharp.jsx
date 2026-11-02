import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pgk8ipbhh {
  fill: currentColor;
  d: path("m12 10.586l6.293-6.293a.999.999 0 1 1 1.414 1.414L13 12.414v4.172l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L11 16.586v-4.172L4.293 5.707a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="pgk8ipbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:merge-fill-sharp"} {...others} />);
}

export default Component;
