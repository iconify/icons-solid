import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhoooy8uy {
  fill: currentColor;
  d: path("m19.5 15.5l-1.425-1.4l1.1-1.1H16v-2h3.15l-1.075-1.075L19.5 8.5L23 12zM2 5V3h12v2zm4.5 12.5h3V15H12v-3H9.5V9.5h-3V12H4v3h2.5zM1 21V6h14v15z");
}
</style><path class="zhoooy8uy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:outpatient-med-sharp"} {...others} />);
}

export default Component;
