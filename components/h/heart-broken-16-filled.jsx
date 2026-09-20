import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.elemeb0rl {
  fill: currentColor;
  d: path("M7.354 3.775a3.25 3.25 0 0 0-4.408.161a3.25 3.25 0 0 0 .012 4.595l4.707 4.708a.5.5 0 0 0 .707 0l4.683-4.68a3.25 3.25 0 0 0-.012-4.594a3.25 3.25 0 0 0-4.601-.012l-.028.028L7.16 5.903l2.162 1.825a.5.5 0 0 1 .032.736l-1.5 1.5a.5.5 0 0 1-.708-.707L8.262 8.14L6.178 6.382a.5.5 0 0 1-.097-.655z");
}
</style><path class="elemeb0rl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:heart-broken-16-filled"} {...others} />);
}

export default Component;
