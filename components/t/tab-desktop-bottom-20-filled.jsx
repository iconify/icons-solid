import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hpkalz_4a {
  fill: currentColor;
  d: path("M14.503 17a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5h-9a2.5 2.5 0 0 0-2.5 2.5V13h7.5a1.5 1.5 0 0 1 1.5 1.5V17zm-3.5 0v-2.5a.5.5 0 0 0-.5-.5h-7.5v.5a2.5 2.5 0 0 0 2.5 2.5z");
}
</style><path class="hpkalz_4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tab-desktop-bottom-20-filled"} {...others} />);
}

export default Component;
