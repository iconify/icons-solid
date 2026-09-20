import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u0waytfra {
  fill: currentColor;
  d: path("m18.5 22l-1.4-3.1l-3.1-1.4l3.1-1.4l1.4-3.1l1.4 3.1l3.1 1.4l-3.1 1.4l-1.4 3.1ZM4 19V7l8-6l8 6v4.175q-.375-.1-.763-.138T18.476 11q-2.725 0-4.6 1.9T12 17.5q0 .375.038.75t.137.75H4Z");
}
</style><path class="u0waytfra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:location-automation"} {...others} />);
}

export default Component;
