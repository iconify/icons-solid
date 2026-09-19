import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gqc50hzap {
  fill: currentColor;
  d: path("M17 18H7V6h10v1h2V1H5v22h14v-6h-2z");
}

.wokadwdga {
  fill: currentColor;
  d: path("m22 12l-4-4v3h-5v2h5v3z");
}
</style><path class="gqc50hzap"/><path class="wokadwdga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-send-to-mobile"} {...others} />);
}

export default Component;
