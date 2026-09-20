import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ai2q2obhe {
  fill: currentColor;
  d: path("m12 15.375l-6-6l1.4-1.4l4.6 4.6l4.6-4.6l1.4 1.4z");
}
</style><path class="ai2q2obhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:expand-more"} {...others} />);
}

export default Component;
