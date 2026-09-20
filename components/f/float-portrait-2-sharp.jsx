import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6swe7bil {
  fill: currentColor;
  d: path("M8.385 11.385h6v-5h-6zM19 21H5V3h14z");
}
</style><path class="m6swe7bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:float-portrait-2-sharp"} {...others} />);
}

export default Component;
