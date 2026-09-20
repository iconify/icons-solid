import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.n8rjm4blg {
  fill: currentColor;
  d: path("M5 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V6h-6v16h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V6H7v2a1 1 0 0 1-2 0z");
}
</style><path class="n8rjm4blg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-t-28-filled"} {...others} />);
}

export default Component;
