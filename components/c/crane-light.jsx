import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n_zzv1brn {
  fill: currentColor;
  d: path("M227.09 18.86a6 6 0 0 0-5.91-.15L102.5 82H32a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h88a14 14 0 0 0 14-14v-32a6.3 6.3 0 0 0-.25-1.72L111.16 91L218 34v126a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-8a6 6 0 0 0-12 0v8a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14V24a6 6 0 0 0-2.91-5.14M99.54 94l20.4 68H62V94ZM32 94h18v68H30V96a2 2 0 0 1 2-2m88 108H32a2 2 0 0 1-2-2v-26h92v26a2 2 0 0 1-2 2");
}
</style><path class="n_zzv1brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:crane-light"} {...others} />);
}

export default Component;
