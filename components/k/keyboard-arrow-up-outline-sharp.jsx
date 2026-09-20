import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wf4rqy1xp {
  fill: currentColor;
  d: path("m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z");
}
</style><path class="wf4rqy1xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-arrow-up-outline-sharp"} {...others} />);
}

export default Component;
