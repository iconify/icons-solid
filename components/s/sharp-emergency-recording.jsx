import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t386oohwx {
  fill: currentColor;
  d: path("M18 10.48V4H2v16h16v-6.48l4 3.98v-11zM12 12l3 1.73l-1 1.73l-3-1.73V17H9v-3.27l-3 1.73l-1-1.73L8 12l-3-1.73l1-1.73l3 1.73V7h2v3.27l3-1.73l1 1.73z");
}
</style><path class="t386oohwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-emergency-recording"} {...others} />);
}

export default Component;
