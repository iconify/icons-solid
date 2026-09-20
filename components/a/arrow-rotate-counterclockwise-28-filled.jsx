import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.a3r7898st {
  fill: currentColor;
  d: path("M14 3c6.075 0 11 4.925 11 11a1 1 0 1 1-2 0a9 9 0 1 0-18 0a8.99 8.99 0 0 0 4 7.48V19.5a1 1 0 1 1 2 0V24a1 1 0 0 1-1 1H5.5a1 1 0 1 1 0-2h2.183A10.98 10.98 0 0 1 3 14C3 7.925 7.925 3 14 3m0 7a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="a3r7898st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-rotate-counterclockwise-28-filled"} {...others} />);
}

export default Component;
