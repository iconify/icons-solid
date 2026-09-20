import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ue_vhvbsw {
  fill: currentColor;
  d: path("M3 21V3h13l5 5v13zM15 5v4h4zM7 17h10v-2H7zm0-8h5V7H7zm0 4h10v-2H7z");
}
</style><path class="ue_vhvbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:news-sharp"} {...others} />);
}

export default Component;
