import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m1k14rbeg {
  fill: currentColor;
  d: path("M4 22V2h16v20zm3-11h3v-1h4v1h3V5H7zm0 2v6h10v-6zM6 4v16h12V4z");
}
</style><path class="m1k14rbeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sensor-window-sharp"} {...others} />);
}

export default Component;
