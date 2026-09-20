import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m4odjybkx {
  fill: currentColor;
  d: path("M4 18h16v-8h-7V6H4zm-2 2V4h20v16zm2-2V6z");
}
</style><path class="m4odjybkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tab-outline-sharp"} {...others} />);
}

export default Component;
