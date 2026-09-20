import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gro-9tb_k {
  fill: currentColor;
  d: path("M11 11h2V4q0-.425-.288-.712T12 3t-.712.288T11 4zm-6 4h14v-2H5zm-1.45 6H6v-3h2v3h3v-3h2v3h3v-3h2v3h2.45l-1-4H4.55zM1 23l2-8v-4h6V4q0-1.25.875-2.125T12 1t2.125.875T15 4v7h6v4l2 8zm18-10H5zm-6-2h-2z");
}
</style><path class="gro-9tb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mop-outline-sharp"} {...others} />);
}

export default Component;
