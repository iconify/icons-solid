import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t8u9f286n {
  fill: currentColor;
  d: path("M13 9.414V17a1 1 0 0 1-2 0V9.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414l4-4a.997.997 0 0 1 1.414 0l4 4a.999.999 0 1 1-1.414 1.414Z");
}
</style><path class="t8u9f286n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-up-small-bulk-round"} {...others} />);
}

export default Component;
