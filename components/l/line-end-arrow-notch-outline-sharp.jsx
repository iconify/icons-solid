import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t8rm69byn {
  fill: currentColor;
  d: path("m12.192 16.827l2.406-4.327H2.5v-1h12.098l-2.406-4.327L19.788 12z");
}
</style><path class="t8rm69byn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-end-arrow-notch-outline-sharp"} {...others} />);
}

export default Component;
