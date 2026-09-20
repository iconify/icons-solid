import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oa0b_20-k {
  fill: currentColor;
  d: path("M2 22L22 2v10h-2V6.85L6.825 20H15v2zm15 0v-5h1v-1q0-.825.588-1.412T20 14t1.413.588T22 16v1h1v5zm2-5h2v-1q0-.425-.288-.712T20 15t-.712.288T19 16zM6.825 20L20 6.85q-2.975 2.975-6.587 6.575T6.825 20");
}
</style><path class="oa0b_20-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:network-locked-outline-sharp"} {...others} />);
}

export default Component;
