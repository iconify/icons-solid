import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qsu1xmbgs {
  fill: currentColor;
  d: path("M6 14h3v2H4V8h2zm3-4h2v6h2v-6h2V8H9zm12 0V8h-5v8h5v-2h-3v-1h3v-2h-3v-1z");
}
</style><path class="qsu1xmbgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-lte-mobiledata"} {...others} />);
}

export default Component;
