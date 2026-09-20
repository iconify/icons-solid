import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.b9le97y1m {
  fill: currentColor;
  d: path("M2.003 6a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-22a1 1 0 0 1-1-1M2 22a1 1 0 0 1 1-1h11v2H3a1 1 0 0 1-1-1m21.25-8c.828 0 1.571.366 2.076.946A1 1 0 0 0 25 13H3a1 1 0 1 0 0 2h14.629c.504-.61 1.267-1 2.121-1zM18 16.75V18h-1.25A1.75 1.75 0 0 0 15 19.75v6.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 28 26.25v-6.5A1.75 1.75 0 0 0 26.25 18H25v-1.25A1.75 1.75 0 0 0 23.25 15h-3.5A1.75 1.75 0 0 0 18 16.75m1.75-.25h3.5a.25.25 0 0 1 .25.25V18h-4v-1.25a.25.25 0 0 1 .25-.25");
}
</style><path class="b9le97y1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:navigation-briefcase-28-filled"} {...others} />);
}

export default Component;
