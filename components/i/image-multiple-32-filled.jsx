import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.a_xwiobvj {
  fill: currentColor;
  d: path("M7 3a4 4 0 0 0-4 4v14c0 .745.204 1.443.559 2.04l8.834-8.392a2.333 2.333 0 0 1 3.214 0l8.834 8.392A4 4 0 0 0 25 21V7a4 4 0 0 0-4-4zm16.023 21.451l-8.793-8.353a.333.333 0 0 0-.46 0L4.977 24.45A4 4 0 0 0 7 25h14c.738 0 1.43-.2 2.023-.549M20 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-9.5 18a4 4 0 0 1-3.465-2H21a5.5 5.5 0 0 0 5.5-5.5V7.035c1.196.692 2 1.984 2 3.465V21a7.5 7.5 0 0 1-7.5 7.5z");
}
</style><path class="a_xwiobvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:image-multiple-32-filled"} {...others} />);
}

export default Component;
