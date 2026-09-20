import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.ie_rsebwe {
  fill: currentColor;
  d: path("M6 1.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6");
}
</style><path class="ie_rsebwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-unknown-12-regular"} {...others} />);
}

export default Component;
