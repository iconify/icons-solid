import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.djavwobyp {
  fill: currentColor;
  d: path("M3 8.5v9.25A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H8.5v5.5zM8.5 10v4h-4v-4zm1.5 4v-4h4v4zm5.5 0v-4h4v4zM10 15.5h4v4h-4zm5.5 0h4v2.25a1.75 1.75 0 0 1-1.75 1.75H15.5zm0-11h2.25c.966 0 1.75.784 1.75 1.75V8.5h-4zm-1.5 4h-4v-4h4zm-5.5 7v4H6.25a1.75 1.75 0 0 1-1.75-1.75V15.5z");
}
</style><path class="djavwobyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:puzzle-cube-24-regular"} {...others} />);
}

export default Component;
