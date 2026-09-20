import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sgkahhb1a {
  fill: currentColor;
  d: path("M2 20V4h20v16zm3-3h10V7H5zm2-2V9h6v6zm10-6h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2z");
}
</style><path class="sgkahhb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:microwave-gen-sharp"} {...others} />);
}

export default Component;
