import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s5-zjsayx {
  fill: currentColor;
  d: path("M4 22v-8h16v8zm2-4h12v-2H6zm6-4L7 7q0-2.075 1.463-3.537T12 2t3.538 1.463T17 7zm0-2.8L15 7q0-1.25-.875-2.125T12 4t-2.125.875T9 7zm0-3.6");
}
</style><path class="s5-zjsayx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:approval-outline-sharp"} {...others} />);
}

export default Component;
