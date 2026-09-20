import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.yi2o8ac0k {
  fill: currentColor;
  d: path("M13.5 14a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1zm-9-12A2.5 2.5 0 0 0 2 4.5v5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-5A2.5 2.5 0 0 0 11.5 2zM13 9h-2V6h2zm-3 0H6V6h4zM5 9H3V6h2zm1-6h4v2H6zm5 0h.5A1.5 1.5 0 0 1 13 4.5V5h-2zM5 3v2H3v-.5A1.5 1.5 0 0 1 4.5 3z");
}
</style><path class="yi2o8ac0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-stack-below-16-regular"} {...others} />);
}

export default Component;
