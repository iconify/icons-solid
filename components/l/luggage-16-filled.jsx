import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.oc46a17vf {
  fill: currentColor;
  d: path("M5.834 1a.5.5 0 0 0 0 1H6v1H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2v.5a.5.5 0 0 0 1 0V14h4v.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V2h.167a.5.5 0 0 0 0-1zM7 3V2h2v1zM5 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5");
}
</style><path class="oc46a17vf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:luggage-16-filled"} {...others} />);
}

export default Component;
