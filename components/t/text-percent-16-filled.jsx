import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.o7a_5rb8c {
  fill: currentColor;
  d: path("M11.962 2.123a.75.75 0 0 1 .203 1.042L5.079 13.669a.75.75 0 0 1-1.243-.838L10.92 2.326a.75.75 0 0 1 1.041-.203M4.5 3.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M1.75 4.75a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m8.5 6.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0M11.5 8.5a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5");
}
</style><path class="o7a_5rb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-percent-16-filled"} {...others} />);
}

export default Component;
