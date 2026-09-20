import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.yr1cwre4p {
  fill: currentColor;
  d: path("M13 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0");
}
</style><path class="yr1cwre4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-small-20-filled"} {...others} />);
}

export default Component;
