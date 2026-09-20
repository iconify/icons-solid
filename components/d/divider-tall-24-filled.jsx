import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ni39i-ivg {
  fill: currentColor;
  d: path("M11 3v18a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0");
}
</style><path class="ni39i-ivg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:divider-tall-24-filled"} {...others} />);
}

export default Component;
