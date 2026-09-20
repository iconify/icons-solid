import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3wpgbbfy {
  fill: currentColor;
  d: path("M7 14v-4l-2 2zm5 3l2-2h-4zm-2-8h4l-2-2zm7 5l2-2l-2-2zM2 20V4h20v16z");
}
</style><path class="b3wpgbbfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:settings-overscan-sharp"} {...others} />);
}

export default Component;
