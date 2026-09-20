import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iyph3bccs {
  fill: currentColor;
  d: path("m8.277 19.25l-4.461.935l.934-4.462zm0 0L4.75 15.723L16.875 3.598l3.527 3.527zm.2-1.602L19 7.125L16.875 5L6.352 15.523z");
}
</style><path class="iyph3bccs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stylus-outline-sharp"} {...others} />);
}

export default Component;
