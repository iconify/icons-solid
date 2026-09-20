import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i-1-d797w {
  fill: currentColor;
  d: path("m12 17.425l-7-7V15H3V7h8v2H6.4l5.6 5.6L19.6 7L21 8.425z");
}
</style><path class="i-1-d797w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:call-missed-sharp"} {...others} />);
}

export default Component;
