import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bf4t9pbre {
  fill: currentColor;
  d: path("M2 20V4h20v16zm10-7l8-5V6l-8 5l-8-5v2z");
}
</style><path class="bf4t9pbre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mail-sharp"} {...others} />);
}

export default Component;
