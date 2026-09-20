import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.td6nl9pru {
  fill: currentColor;
  d: path("M4 21V3h2v2h2V3h8v2h2V3h2v18h-2v-2h-2v2H8v-2H6v2zm2-4h2v-2H6zm0-4h2v-2H6zm0-4h2V7H6zm10 8h2v-2h-2zm0-4h2v-2h-2zm0-4h2V7h-2z");
}
</style><path class="td6nl9pru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:theaters-sharp"} {...others} />);
}

export default Component;
