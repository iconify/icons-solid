import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s4d7iwbmc {
  fill: currentColor;
  d: path("M1 16v-4.4L4.65 3H16v13l-7 7l-1.85-1.85L8.45 16zm17 0V3h4v13z");
}
</style><path class="s4d7iwbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:thumb-down-sharp"} {...others} />);
}

export default Component;
