import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qlbnh-bao {
  fill: currentColor;
  d: path("M6 21v-2l1-1H2V3h20v15h-5l1 1v2z");
}
</style><path class="qlbnh-bao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mimo-sharp"} {...others} />);
}

export default Component;
