import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eg3tkuwdo {
  fill: currentColor;
  d: path("M17 23v-4H5V7H1V5h4V1h2v16h16v2h-4v4zm0-8V7H9V5h10v10z");
}
</style><path class="eg3tkuwdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-sharp"} {...others} />);
}

export default Component;
