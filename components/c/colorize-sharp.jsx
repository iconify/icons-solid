import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aq87_cc_p {
  fill: currentColor;
  d: path("M3 21v-4.75l8.95-8.95l-1.45-1.4l1.45-1.4l1.9 1.9l3.8-3.8l3.75 3.75l-3.775 3.775l1.9 1.95L18.1 13.5l-1.4-1.45L7.75 21zm2-2h1.95l8.3-8.35l-1.9-1.9L5 17.05z");
}
</style><path class="aq87_cc_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:colorize-sharp"} {...others} />);
}

export default Component;
