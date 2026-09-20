import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o-pztebuf {
  fill: currentColor;
  d: path("M3 21V3h10v2H5v14h14v-8h2v10zm3-4h12l-3.75-5l-3 4L9 13zm11-8V7h-2V5h2V3h2v2h2v2h-2v2z");
}
</style><path class="o-pztebuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-photo-alternate-outline-sharp"} {...others} />);
}

export default Component;
