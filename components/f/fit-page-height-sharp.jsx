import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qv562z2_f {
  fill: currentColor;
  d: path("M9 9h6l-3-3zm3 9l3-3H9zm8 4H4V2h16z");
}
</style><path class="qv562z2_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fit-page-height-sharp"} {...others} />);
}

export default Component;
