import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-hc4abku {
  fill: currentColor;
  d: path("M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm-1 7.5A1.5 1.5 0 0 1 3.5 9h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 10.5M2 18a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2");
}
</style><path class="h-hc4abku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-thickness-24-filled"} {...others} />);
}

export default Component;
