import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pq_bt8b2w {
  fill: currentColor;
  d: path("m20.45 23.3l-3.3-3.3H2V4h2l2 2H3.15L.65 3.5l1.425-1.425l19.8 19.8zM5 17h9.15l-2-2H5zm0-4h5.15l-2-2H5zm0-4h1.15l-2-2H5zm1.85-5H22v15.15L15.85 13H19v-2h-5.15l-2-2H15V7H9.85z");
}
</style><path class="pq_bt8b2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-ad-off-sharp"} {...others} />);
}

export default Component;
