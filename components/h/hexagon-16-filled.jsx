import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.z4vu8bcej {
  fill: currentColor;
  d: path("M5.4 2a1.5 1.5 0 0 0-1.3.75l-2.599 4.5a1.5 1.5 0 0 0 0 1.5l2.6 4.5a1.5 1.5 0 0 0 1.298.75h5.2a1.5 1.5 0 0 0 1.3-.75l2.599-4.5a1.5 1.5 0 0 0 0-1.5l-2.6-4.5A1.5 1.5 0 0 0 10.6 2z");
}
</style><path class="z4vu8bcej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hexagon-16-filled"} {...others} />);
}

export default Component;
