import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ujic83bgb {
  fill: currentColor;
  d: path("M8 21v-2H2V3h20v16h-6v2z");
}
</style><path class="ujic83bgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tv-sharp"} {...others} />);
}

export default Component;
