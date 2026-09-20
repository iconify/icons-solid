import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u760py7xa {
  fill: currentColor;
  d: path("M10.96 18.567a1.501 1.501 0 1 0 2.122-2.122a1.501 1.501 0 0 0-2.123 2.122");
}
</style><path class="u760py7xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:wifi-4-24-filled"} {...others} />);
}

export default Component;
