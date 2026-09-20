import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r6_dwcq4i {
  fill: currentColor;
  d: path("M25.463 6a7.5 7.5 0 0 0-1.63 2.965l-8.036 28.44a1.25 1.25 0 0 0 2.406.68l8.036-28.44A5.005 5.005 0 0 1 30.965 6a5.75 5.75 0 0 1 4.882 2.874l7.65 13.25a3.75 3.75 0 0 1 0 3.75l-8.228 14.25A3.75 3.75 0 0 1 32.022 42h-9.489a7.5 7.5 0 0 0 1.63-2.965L32.2 10.59a1.25 1.25 0 1 0-2.406-.68l-8.037 28.447A5.005 5.005 0 0 1 17.034 42a5.75 5.75 0 0 1-4.882-2.874l-7.65-13.25a3.75 3.75 0 0 1 0-3.75l8.228-14.25A3.75 3.75 0 0 1 15.977 6z");
}
</style><path class="r6_dwcq4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:agents-48-filled"} {...others} />);
}

export default Component;
