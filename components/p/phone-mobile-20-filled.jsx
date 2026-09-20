import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.e9quy9biw {
  d: path("M13.5 2A1.5 1.5 0 0 1 15 3.5v13a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5v-13A1.5 1.5 0 0 1 6.5 2zM11 14H9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="e9quy9biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:phone-mobile-20-filled"} {...others} />);
}

export default Component;
