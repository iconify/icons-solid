import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rae8slb2m {
  fill: currentColor;
  d: path("m21.949 3.316l-6 18a1 1 0 0 1-1.843.131l-3.38-6.759l3.981-3.981a.999.999 0 1 0-1.414-1.414l-3.981 3.981l-6.759-3.38a1 1 0 0 1 .131-1.843l18-6a1.001 1.001 0 0 1 1.265 1.265");
}
</style><path class="rae8slb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paper-plane-fill-sharp"} {...others} />);
}

export default Component;
