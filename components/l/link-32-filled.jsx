import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.rk169tk8u {
  fill: currentColor;
  d: path("M2 16.25A7.25 7.25 0 0 1 9.25 9h3.5a1.25 1.25 0 1 1 0 2.5h-3.5a4.75 4.75 0 1 0 0 9.5h3.5a1.25 1.25 0 1 1 0 2.5h-3.5A7.25 7.25 0 0 1 2 16.25m28 0A7.25 7.25 0 0 0 22.75 9h-3.5a1.25 1.25 0 1 0 0 2.5h3.5a4.75 4.75 0 1 1 0 9.5h-3.5a1.25 1.25 0 1 0 0 2.5h3.5A7.25 7.25 0 0 0 30 16.25M9.75 15a1.25 1.25 0 1 0 0 2.5h12.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="rk169tk8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:link-32-filled"} {...others} />);
}

export default Component;
