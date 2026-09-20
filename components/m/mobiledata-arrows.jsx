import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rdfg-lpcu {
  fill: currentColor;
  d: path("M8 9.975h2v7.175l1.55-1.55L13 17l-4 4l-4-4l1.45-1.4L8 17.15zm8 4h-2V6.8l-1.6 1.6L11 7l4-4l4 4l-1.4 1.4L16 6.8z");
}
</style><path class="rdfg-lpcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobiledata-arrows"} {...others} />);
}

export default Component;
