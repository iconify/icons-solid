import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ns705whon {
  fill: currentColor;
  d: path("M2.75 5a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0v-16A.75.75 0 0 1 2.75 5m15.47 1.72a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 1 1-1.06-1.06l5.22-5.22H6.753a.75.75 0 0 1 0-1.5h16.685l-5.22-5.22a.75.75 0 0 1 0-1.06");
}
</style><path class="ns705whon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-export-ltr-28-regular"} {...others} />);
}

export default Component;
