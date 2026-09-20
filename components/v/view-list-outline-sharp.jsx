import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ow1l7hbgi {
  fill: currentColor;
  d: path("M9 18h11v-2.675H9zM4 8.675h3V6H4zm0 4.675h3v-2.675H4zM4 18h3v-2.675H4zm5-4.65h11v-2.675H9zm0-4.675h11V6H9zM2 20V4h20v16z");
}
</style><path class="ow1l7hbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-list-outline-sharp"} {...others} />);
}

export default Component;
