import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ta7l5bcih {
  fill: currentColor;
  d: path("M3 17V7h2v4h4V7h2v10H9v-4H5v4zm10 0v-2h6v-2h-6V7h8v2h-6v2h4q.825 0 1.413.588T21 13v2q0 .825-.587 1.413T19 17z");
}
</style><path class="ta7l5bcih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-h5-outline"} {...others} />);
}

export default Component;
