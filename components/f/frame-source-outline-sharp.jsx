import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v-ycs_bax {
  fill: currentColor;
  d: path("M8.6 15.6L5 12l3.6-3.6L10 9.825L7.825 12L10 14.175zm6.8 0L14 14.175L16.175 12L14 9.825L15.4 8.4L19 12zM3 21v-6h2v4h4v2zm12 0v-2h4v-4h2v6zM3 9V3h6v2H5v4zm16 0V5h-4V3h6v6z");
}
</style><path class="v-ycs_bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:frame-source-outline-sharp"} {...others} />);
}

export default Component;
