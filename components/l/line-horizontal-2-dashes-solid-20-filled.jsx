import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.b0nyedkcd {
  fill: currentColor;
  d: path("M2.75 6a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm6 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm6 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-12 6a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="b0nyedkcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-2-dashes-solid-20-filled"} {...others} />);
}

export default Component;
