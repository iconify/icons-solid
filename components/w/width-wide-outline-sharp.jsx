import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vw45hdcdl {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h2V6H4zm4 0h8V6H8zm10 0h2V6h-2zM8 6v12z");
}
</style><path class="vw45hdcdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:width-wide-outline-sharp"} {...others} />);
}

export default Component;
