import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.nlbrz7b0i {
  fill: currentColor;
  d: path("M5.8 4.4a.5.5 0 0 0-.601-.8A7.99 7.99 0 0 0 2 10a7.99 7.99 0 0 0 3.199 6.4a.5.5 0 0 0 .6-.8A6.99 6.99 0 0 1 3 10a6.99 6.99 0 0 1 2.8-5.6m9.001-.8a.5.5 0 0 0-.6.8A6.99 6.99 0 0 1 17 10a6.99 6.99 0 0 1-2.8 5.6a.5.5 0 1 0 .601.8A7.99 7.99 0 0 0 18 10a7.99 7.99 0 0 0-3.199-6.4M6.5 9.5a.5.5 0 1 0 0 1h7a.5.5 0 1 0 0-1z");
}
</style><path class="nlbrz7b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:subtract-parentheses-20-regular"} {...others} />);
}

export default Component;
