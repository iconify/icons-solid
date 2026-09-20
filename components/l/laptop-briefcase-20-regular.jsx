import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.f9octmpjq {
  fill: currentColor;
  d: path("M3 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.5a2.5 2.5 0 0 0-1-.45V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4v1H5a2 2 0 0 1-2-2zm-.5 9H9v-1H2.5a.5.5 0 0 0 0 1m9.5-5.5v.5h-.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5H17v-.5A1.5 1.5 0 0 0 15.5 9h-2a1.5 1.5 0 0 0-1.5 1.5m1.5-.5h2a.5.5 0 0 1 .5.5v.5h-3v-.5a.5.5 0 0 1 .5-.5");
}
</style><path class="f9octmpjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:laptop-briefcase-20-regular"} {...others} />);
}

export default Component;
