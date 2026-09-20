import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ob-hc_wiz {
  fill: currentColor;
  d: path("M2.004 7.75A3.75 3.75 0 0 1 5.754 4H22.25A3.75 3.75 0 0 1 26 7.75v11.5A3.75 3.75 0 0 1 22.25 23H5.755a3.75 3.75 0 0 1-3.75-3.75zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v11.5a2.25 2.25 0 0 0 2.25 2.25H9v-16zm4.746 6v10h11.75a2.25 2.25 0 0 0 2.25-2.25V11.5zm14-1.5V7.75a2.25 2.25 0 0 0-2.25-2.25H10.5V10z");
}
</style><path class="ob-hc_wiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:panel-left-header-28-regular"} {...others} />);
}

export default Component;
