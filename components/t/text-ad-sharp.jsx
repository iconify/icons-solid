import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fsia2hbyl {
  fill: currentColor;
  d: path("M2 20V4h20v16zm3-3h14v-2H5zm0-4h14v-2H5zm0-4h10V7H5z");
}
</style><path class="fsia2hbyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-ad-sharp"} {...others} />);
}

export default Component;
