import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zdpwyc_uf {
  fill: currentColor;
  d: path("M6.5 17v-3.115h1V16h12V6h-12v2.116h-1V3h14v14zm-3 3V6.616h1V19h12.385v1zm8.923-5.327l-.688-.689l2.44-2.484H6.5v-1h7.675l-2.44-2.484l.688-.689L16.096 11z");
}
</style><path class="zdpwyc_uf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:move-group-outline-sharp"} {...others} />);
}

export default Component;
