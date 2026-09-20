import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.xq9y8cbqg {
  fill: currentColor;
  d: path("M10.53 2.22a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v7.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 1 0 1.06-1.06zM4.25 12.5a5.75 5.75 0 0 1 4-5.479v1.605a4.25 4.25 0 1 0 3.5 0V7.021c2.32.74 4 2.914 4 5.48a5.75 5.75 0 0 1-11.5 0m2.5 0c0-1.15.598-2.161 1.5-2.739v2.74a1.75 1.75 0 1 0 3.5 0V9.76a3.25 3.25 0 1 1-5 2.74");
}
</style><path class="xq9y8cbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:double-tap-swipe-up-20-filled"} {...others} />);
}

export default Component;
