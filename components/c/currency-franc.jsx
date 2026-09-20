import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ifqa-hi3d {
  fill: currentColor;
  d: path("M7.692 20v-3h-2v-1h2V4h9.616v1H8.692v6.308h7.616v1H8.692V16H12.5v1H8.692v3z");
}
</style><path class="ifqa-hi3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:currency-franc"} {...others} />);
}

export default Component;
