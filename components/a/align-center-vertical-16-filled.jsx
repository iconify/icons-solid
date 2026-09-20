import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.tfu7xgbem {
  fill: currentColor;
  d: path("M8.5 15a.5.5 0 0 1-.5-.5V14H6.75A1.75 1.75 0 0 1 5 12.25v-1.5C5 9.784 5.784 9 6.75 9H8V7H5.75A1.75 1.75 0 0 1 4 5.25v-1.5C4 2.784 4.784 2 5.75 2H8v-.5a.5.5 0 0 1 1 0V2h2.25c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 11.25 7H9v2h1.25c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 10.25 14H9v.5a.5.5 0 0 1-.5.5");
}
</style><path class="tfu7xgbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:align-center-vertical-16-filled"} {...others} />);
}

export default Component;
