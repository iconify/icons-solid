import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.ybpvrfbye {
  fill: currentColor;
  d: path("M6.5 5.655V3.25a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 .262.57l1.75 1.5a.75.75 0 1 0 .976-1.14zM12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0m-1.5 0a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0");
}
</style><path class="ybpvrfbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-away-12-regular"} {...others} />);
}

export default Component;
