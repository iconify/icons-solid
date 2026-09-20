import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dgc2hnbvt {
  fill: currentColor;
  d: path("M3 21v-2h2V3h10v1h4v15h2v2h-4V6h-2v15zm8.713-8.287Q12 12.425 12 12t-.288-.712T11 11t-.712.288T10 12t.288.713T11 13t.713-.288");
}
</style><path class="dgc2hnbvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:meeting-room-sharp"} {...others} />);
}

export default Component;
