import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.n9ueu5_kg {
  fill: currentColor;
  d: path("M1 3.75A.75.75 0 0 1 1.75 3h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 1 3.75m0 4A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75m0 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75");
}
</style><path class="n9ueu5_kg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-align-left-16-filled"} {...others} />);
}

export default Component;
