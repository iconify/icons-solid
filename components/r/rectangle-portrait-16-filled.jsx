import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.gljddutro {
  fill: currentColor;
  d: path("M3 12.5A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 10.5 1h-5A2.5 2.5 0 0 0 3 3.5z");
}
</style><path class="gljddutro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:rectangle-portrait-16-filled"} {...others} />);
}

export default Component;
