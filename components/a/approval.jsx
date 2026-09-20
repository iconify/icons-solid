import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mngie1vxk {
  fill: currentColor;
  d: path("M4 22v-6q0-.825.588-1.412T6 14h12q.825 0 1.413.588T20 16v6zm2-4h12v-2H6zm6-4L7 7q0-2.075 1.463-3.537T12 2t3.538 1.463T17 7z");
}
</style><path class="mngie1vxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:approval"} {...others} />);
}

export default Component;
