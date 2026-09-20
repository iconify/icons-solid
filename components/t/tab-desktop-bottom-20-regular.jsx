import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.q__bxxbpi {
  fill: currentColor;
  d: path("M17.003 14.5a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5v-9a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5zm-13-.5v.5a1.5 1.5 0 0 0 1.5 1.5h5.5v-1.5a.5.5 0 0 0-.5-.5zm8 2h2.5a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5V13h6.5a1.5 1.5 0 0 1 1.5 1.5z");
}
</style><path class="q__bxxbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tab-desktop-bottom-20-regular"} {...others} />);
}

export default Component;
