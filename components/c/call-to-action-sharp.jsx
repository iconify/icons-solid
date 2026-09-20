import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sjhur9baf {
  fill: currentColor;
  d: path("M6 17h12v-3H6zm-4 3V4h20v16z");
}
</style><path class="sjhur9baf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:call-to-action-sharp"} {...others} />);
}

export default Component;
