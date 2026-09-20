import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jlr5kccwv {
  fill: currentColor;
  d: path("M4.284 10.295a1 1 0 0 0 1.424 1.404L11 6.329v13.67a1 1 0 1 0 2 0V6.335l5.285 5.364a1 1 0 0 0 1.424-1.404L12.887 3.37a1.25 1.25 0 0 0-1.78 0z");
}
</style><path class="jlr5kccwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-24-filled"} {...others} />);
}

export default Component;
