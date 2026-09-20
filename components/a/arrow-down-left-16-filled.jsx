import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.oiabtlblj {
  fill: currentColor;
  d: path("M9 13.25a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 1.5 0v3.69l9.22-9.22a.75.75 0 0 1 1.06 1.06L4.56 12.5h3.69a.75.75 0 0 1 .75.75");
}
</style><path class="oiabtlblj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-left-16-filled"} {...others} />);
}

export default Component;
