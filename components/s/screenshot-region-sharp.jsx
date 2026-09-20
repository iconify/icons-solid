import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fiqyvsyri {
  fill: currentColor;
  d: path("M17 22v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 19v-5h2v3h3v2zm0-9V5h5v2H7v3zm12 0V7h-3V5h5v5z");
}
</style><path class="fiqyvsyri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:screenshot-region-sharp"} {...others} />);
}

export default Component;
