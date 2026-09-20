import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.tbs899b8k {
  fill: currentColor;
  d: path("M3.5 8a4.5 4.5 0 0 1 7.854-3H9.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v.778a6 6 0 1 0 1.94 5.324a.75.75 0 0 0-1.485-.211A4.501 4.501 0 0 1 3.5 8");
}
</style><path class="tbs899b8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-clockwise-16-filled"} {...others} />);
}

export default Component;
