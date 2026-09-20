import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.p0km72bpc {
  fill: currentColor;
  d: path("M1.22 10.78a.75.75 0 0 1 0-1.06L8.44 2.5H4.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V3.56l-7.22 7.22a.75.75 0 0 1-1.06 0");
}
</style><path class="p0km72bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-right-12-filled"} {...others} />);
}

export default Component;
