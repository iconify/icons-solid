import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pdxia4ont {
  fill: currentColor;
  d: path("M5 21V3h13.95l4 10H19v8zm2-2h10v-6H8.05L7 10.375z");
}
</style><path class="pdxia4ont"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:devices-fold-2-sharp"} {...others} />);
}

export default Component;
