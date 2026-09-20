import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k2cy5k4ap {
  fill: currentColor;
  d: path("M11 22V5.825L6.4 10.4L5 9l7-7l7 7l-1.4 1.425l-4.6-4.6V22z");
}
</style><path class="k2cy5k4ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:north-sharp"} {...others} />);
}

export default Component;
