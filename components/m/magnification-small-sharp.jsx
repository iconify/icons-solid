import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ehkk5bc9y {
  fill: currentColor;
  d: path("M5 11h4V7H5zm-3 9V4h20v16z");
}
</style><path class="ehkk5bc9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:magnification-small-sharp"} {...others} />);
}

export default Component;
