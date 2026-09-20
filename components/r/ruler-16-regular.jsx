import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.s-21rab4r {
  fill: currentColor;
  d: path("M10.5 1A1.5 1.5 0 0 1 12 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 13.5v-11A1.5 1.5 0 0 1 5.5 1zm-5 1a.5.5 0 0 0-.5.5V4h2.5a.5.5 0 0 1 0 1H5v1.5h3.5a.5.5 0 0 1 0 1H5V9h2.5a.5.5 0 0 1 0 1H5v1.5h3.5a.5.5 0 0 1 0 1H5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5z");
}
</style><path class="s-21rab4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:ruler-16-regular"} {...others} />);
}

export default Component;
