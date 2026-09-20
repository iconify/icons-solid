import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v6qjj7bml {
  fill: currentColor;
  d: path("M3 14v-4h18v4zm11-1h6v-2h-6z");
}
</style><path class="v6qjj7bml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sliders-sharp"} {...others} />);
}

export default Component;
