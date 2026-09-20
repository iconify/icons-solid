import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ntw9sfhjl {
  fill: currentColor;
  d: path("M8 11h6V6H8zm12 11H4V2h16zm-2-2V4H6v16zm0-16H6z");
}
</style><path class="ntw9sfhjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:float-portrait-2-outline-sharp"} {...others} />);
}

export default Component;
