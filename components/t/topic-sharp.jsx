import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z80bkzg0b {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm4-4h8v-2H6zm0-4h12v-2H6z");
}
</style><path class="z80bkzg0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:topic-sharp"} {...others} />);
}

export default Component;
