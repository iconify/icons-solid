import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_bqi0bwg {
  fill: currentColor;
  d: path("M4.615 20V4h6v16zm8.77 0V4h6v16zm5-15h-4v14h4z");
}
</style><path class="d_bqi0bwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:splitscreen-left-sharp"} {...others} />);
}

export default Component;
