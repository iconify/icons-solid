import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.btzt_lbad {
  fill: currentColor;
  d: path("m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z");
}
</style><path class="btzt_lbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:check-small-outline-sharp"} {...others} />);
}

export default Component;
